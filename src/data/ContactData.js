import {
  HiOutlineMail,
  HiOutlinePhoneOutgoing,
  HiOutlineChat,
  HiOutlineHome,
} from 'react-icons/hi';

const ContactData = [
  {
    icon: HiOutlineMail,
    name: 'Email',
    detail: 'Jeeranun.code@gmail.com',
    contactLink: 'Write me ',
    href: 'mailto:Jeeranun.code@gmail.com',
  },
  {
    icon: HiOutlinePhoneOutgoing,
    name: 'Phone number',
    detail: '086-743-0415',
    contactLink: 'Phone me',
    href: 'tel:+66867430415',
  },
  {
    icon: HiOutlineChat,
    name: 'Messenger',
    detail: 'Jeeranun Nat',
    contactLink: 'Write me',
    href: 'https://line.me/ti/p/8cuoEaKMXr',
  },
  {
    icon: HiOutlineHome,
    name: 'Address',
    detail: '30 Moo5 Kathu,Phuket 83120 ',
    contactLink: 'See map',
    href: 'https://www.google.co.th/maps/place/Loch+Palm+Golf+Club/@7.9217327,98.3361345,19z/data=!4m6!3m5!1s0x305030f05f21848d:0x170ff13e6f457466!8m2!3d7.9220342!4d98.3373302!16s%2Fg%2F11bt_nw4_m?hl=th&entry=ttu',
  },
];
export default ContactData;
