import { AiOutlineHome } from 'react-icons/ai';
import { CgProfile, CgWebsite } from 'react-icons/cg';
import { TiContacts } from 'react-icons/ti';
import { IoSchoolOutline } from 'react-icons/io5';

const NavMenuData = [
  {
    title: 'HOME',
    path: 'home',
    icon: AiOutlineHome,
  },
  {
    title: 'ABOUT',
    path: 'about',
    icon: CgProfile,
  },
  {
    title: 'SKILL',
    path: 'skill',
    icon: IoSchoolOutline,
  },
  {
    title: 'WORKSHOP',
    path: 'workshop',
    icon: CgWebsite,
  },
  {
    title: 'CONTACT',
    path: 'contact',
    icon: TiContacts,
  },
];
export default NavMenuData;
