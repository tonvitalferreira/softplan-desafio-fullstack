import styled, { css } from "styled-components";
import {
  FaRegUser,
  FaUserLock,
  FaUserTie,
  FaUser,
  FaCheck,
} from "react-icons/fa";
import { SiLastpass } from "react-icons/si";
import { HiUsers, HiLogout } from "react-icons/hi";
import { TiDocumentText } from "react-icons/ti";
import {
  AiOutlineFileSearch,
  AiTwotoneEdit,
  AiTwotoneDelete,
  AiFillEye,
} from "react-icons/ai";
import { BsChatQuoteFill } from "react-icons/bs";

export const iconCSS = css`
  width: 20px;
  height: 20px;
  color: var(--color-white);
`;

export const IconSee = styled(AiFillEye)`
  ${iconCSS};
`;

export const IconEdit = styled(AiTwotoneEdit)`
  ${iconCSS};
`;

export const IconDelete = styled(AiTwotoneDelete)`
  ${iconCSS};
`;

export const IconCheck = styled(FaCheck)`
  ${iconCSS};
`;

export const IconSight = styled(BsChatQuoteFill)`
  ${iconCSS};
`;

export const IconViewProcess = styled(AiOutlineFileSearch)`
  ${iconCSS};
`;

export const IconProcesses = styled(TiDocumentText)`
  ${iconCSS};
`;

export const IconLougout = styled(HiLogout)`
  ${iconCSS};
`;

export const IconUsers = styled(HiUsers)`
  ${iconCSS};
`;

export const IconUser = styled(FaRegUser)`
  ${iconCSS};
`;

export const IconPassword = styled(SiLastpass)`
  ${iconCSS};
`;

export const IconAdmin = styled(FaUserLock)`
  ${iconCSS};
`;

export const IconTriator = styled(FaUserTie)`
  ${iconCSS};
`;

export const IconFinalizator = styled(FaUser)`
  ${iconCSS};
`;
