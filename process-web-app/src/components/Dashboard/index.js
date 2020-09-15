import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

import {
  Container,
  FixedLeftMenuBar,
  FixedProfileCard,
  ProfileImage,
  ProfileCardHeader,
  ProfileFullName,
  ProfileDetail,
  FixedMiddleCard,
  CardHeader,
  CardHeaderTitle,
  CardHeaderActions,
  CardBody,
  UsersCard,
  ProcessesCard,
  FixedViewProcessCard,
  MainPanel,
  LeftButton,
  Separator,
  EmptyList,
  EmptyContainer,
  GhostIcon,
  CardViewProcessBody,
  ProcesssTitle,
  ProcesssDescription,
} from "./styles";
import UserRow from "../ListRows/UserRow";
import ProcessRow from "../ListRows/ProcessRow";
import SightRow from "../ListRows/SightRow";
import ModalCreateUser from "../Modals/ModalCreateUser";
import ModalDeleteUser from "../Modals/ModalDeleteUser";
import ModalCreateProcess from "../Modals/ModalCreateProcess";
import ModalCreateSight from "../Modals/ModalCreateSight";
import { ActionButtonSmall } from "../FormComponents";
import {
  IconUsers,
  IconProcesses,
  IconViewProcess,
  IconLougout,
  IconSight,
  IconEdit,
} from "../Icons";
import profileDefaultImage from "../../assets/img/user-profile.png";
import { logout } from "../../api/APIAuth";
import { getUserByLocalAuthToken, getAllUsers } from "../../api/APIUsers";
import { getAllProcesses } from "../../api/APIProcesses";
import { getSightsByProcessId } from "../../api/APISights";

function DashboardAdmin() {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);
  const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
  const [showModalCreateProcess, setShowModalCreateProcess] = useState(false);
  const [showModalCreateSight, setShowModalCreateSight] = useState(false);
  const [canRenderRedirect, setCanRenderRedirect] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [allProcesses, setAllProcesses] = useState([]);
  const [allSights, setAllSights] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [user, setUser] = useState(null);

  const [viewProcess, setViewProcess] = useState(null);

  let renderRedirect = (url) => {
    return <Redirect to={url} />;
  };

  let loadAllDataFromAPI = async () => {
    let fatchUser = await getUserByLocalAuthToken();
    setUser(fatchUser);

    let fatchUsers = await getAllUsers();
    setAllUsers(fatchUsers);

    let fatchProcesses = await getAllProcesses();
    setAllProcesses(fatchProcesses);

    if (viewProcess) {
      let fatchSights = await getSightsByProcessId(viewProcess.id);
      setAllSights(fatchSights);
    }
  };

  let handleViewProcess = async (process) => {
    setViewProcess(process);
    let fatchSights = await getSightsByProcessId(process.id);
    console.log(fatchSights);
    setAllSights(fatchSights);
  };

  useEffect(() => {
    loadAllDataFromAPI();
  }, []);

  return (
    <Container>
      <ModalCreateUser
        show={showModalCreateUser}
        selectedUser={selectedUser}
        handlerOpenModal={setShowModalCreateUser}
        handlerReloadData={loadAllDataFromAPI}
      />
      <ModalDeleteUser
        show={showModalDeleteUser}
        selectedUser={selectedUser}
        handlerOpenModal={setShowModalDeleteUser}
        handlerReloadData={loadAllDataFromAPI}
      />
      <ModalCreateProcess
        show={showModalCreateProcess}
        handlerOpenModal={setShowModalCreateProcess}
        handlerReloadData={loadAllDataFromAPI}
      />
      <ModalCreateSight
        show={showModalCreateSight}
        process={viewProcess}
        handlerOpenModal={setShowModalCreateSight}
        handlerReloadData={loadAllDataFromAPI}
      />
      {canRenderRedirect ? renderRedirect("/signin") : null}
      <FixedLeftMenuBar>
        <LeftButton
          onClick={(e) => {
            logout();
            setCanRenderRedirect(true);
          }}
        >
          <IconLougout />
        </LeftButton>
      </FixedLeftMenuBar>
      <MainPanel>
        <FixedProfileCard>
          <ProfileCardHeader />
          <ProfileImage src={profileDefaultImage} height={80} />
          <ProfileFullName>{user ? user.fullName : "..."}</ProfileFullName>
          <ProfileDetail>{user ? "@" + user.userName : "..."}</ProfileDetail>
        </FixedProfileCard>
        <FixedMiddleCard>
          <UsersCard
            className={
              user && user.permission.includes("A") ? "visible" : "invisible"
            }
          >
            <CardHeader>
              <CardHeaderTitle>
                <IconUsers />
                <h2>Users</h2>
              </CardHeaderTitle>
              <CardHeaderActions>
                <ActionButtonSmall
                  sytle={{ width: 40 }}
                  onClick={() => {
                    setSelectedUser(null);
                    setShowModalCreateUser(true);
                  }}
                >
                  <p>+</p>
                </ActionButtonSmall>
              </CardHeaderActions>
            </CardHeader>
            <Separator />
            <CardBody>
              {allUsers.length >= 1 ? (
                allUsers.map((user, key) => {
                  return (
                    <UserRow
                      key={key}
                      user={user}
                      handleSelectUser={setSelectedUser}
                      handleOpenEditModal={setShowModalCreateUser}
                      handleOpenDeleteModal={setShowModalDeleteUser}
                    />
                  );
                })
              ) : (
                <EmptyList>
                  <EmptyContainer>
                    <GhostIcon />
                    <h4>Nothing here!</h4>
                  </EmptyContainer>
                </EmptyList>
              )}
            </CardBody>
          </UsersCard>
          <ProcessesCard
            className={
              user &&
              (user.permission.includes("T") || user.permission.includes("F"))
                ? "visible"
                : "invisible"
            }
          >
            <CardHeader>
              <CardHeaderTitle>
                <IconProcesses />
                <h2>Process</h2>
              </CardHeaderTitle>
              <CardHeaderActions>
                <ActionButtonSmall
                  className={
                    user &&
                    (user.permission.includes("A") ||
                      user.permission.includes("T"))
                      ? "visible"
                      : "invisible"
                  }
                  onClick={() => {
                    setShowModalCreateProcess(true);
                  }}
                  sytle={{ width: 40 }}
                >
                  <p>+</p>
                </ActionButtonSmall>
              </CardHeaderActions>
            </CardHeader>
            <Separator />
            <CardBody>
              {allProcesses.length >= 1 ? (
                allProcesses.map((process, key) => {
                  return (
                    <ProcessRow
                      key={key}
                      process={process}
                      handleViewProcess={handleViewProcess}
                    />
                  );
                })
              ) : (
                <EmptyList>
                  <EmptyContainer>
                    <GhostIcon />
                    <h4>Nothing here!</h4>
                  </EmptyContainer>
                </EmptyList>
              )}
            </CardBody>
          </ProcessesCard>
        </FixedMiddleCard>
        <FixedViewProcessCard className={viewProcess ? "visible" : "invisible"}>
          <CardHeader>
            <CardHeaderTitle>
              <IconViewProcess />
              <h2>View Process</h2>
            </CardHeaderTitle>
          </CardHeader>
          <Separator />
          <CardViewProcessBody>
            <ProcesssTitle>
              {viewProcess ? viewProcess.title : "..."}
            </ProcesssTitle>
            <ProcesssDescription>
              {viewProcess ? viewProcess.description : "..."}
            </ProcesssDescription>
          </CardViewProcessBody>
          <Separator />
          <CardHeader>
            <CardHeaderTitle>
              <IconSight
                style={{ height: 30, width: 30, marginRight: "5px" }}
              />
              <h2>Process Sights</h2>
            </CardHeaderTitle>

            <CardHeaderActions>
              <ActionButtonSmall
                sytle={{ width: 40 }}
                onClick={() => {
                  setShowModalCreateSight(true);
                }}
              >
                <IconEdit style={{ color: "#fff", height: 25, width: 25 }} />
              </ActionButtonSmall>
            </CardHeaderActions>
          </CardHeader>
          <Separator />
          <CardViewProcessBody>
            {allSights ? <SightRow key={1} sight={allSights} /> : ""}
          </CardViewProcessBody>
        </FixedViewProcessCard>
      </MainPanel>
    </Container>
  );
}

export default DashboardAdmin;
