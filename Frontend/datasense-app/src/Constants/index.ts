import { faMagicWandSparkles, faHistory, faDatabase, faCalendarAlt, faChartLine, faInfoCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

export const menuItems = [
    { icon: faMagicWandSparkles, text: "Generate", url: '/dashboard/generate' },
    { icon: faHistory, text: "Activity Logs", url: '/dashboard/activity' },
    { icon: faDatabase, text: "Data Sources", url: '/dashboard/data' },
    { icon: faCalendarAlt, text: "Calendar", url: '/dashboard/calendar' },
    { icon: faChartLine, text: "Visualizations", url: '/dashboard/visualizations' },
    { icon: faInfoCircle, text: "Help", url: '/dashboard/help' },
   /* { icon: faSignOutAlt, text: "Logout", url: '/' },*/ 
];

export const navItems = [
    {text: "Home", link: '/home'},
    {text: "Generate", link: '/generate'},
    {text: "Dashboard", link: '/dashboard'},
]

export const ACCESS_TOKEN= ""
export const REFRESH_TOKEN = ""
