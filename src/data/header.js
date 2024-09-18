import { CiBaseball } from "react-icons/ci";
import { CiCoins1 } from "react-icons/ci";
import { CiKeyboard } from "react-icons/ci";
import { CiChat1 } from "react-icons/ci";
import { CiMusicNote1 } from "react-icons/ci";
import { CiDumbbell } from "react-icons/ci";
import { CiHome } from "react-icons/ci";
import { CiMoneyBill } from "react-icons/ci";

import { AiFillGithub } from "react-icons/ai";
import { AiOutlineCodepen } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

export const headerMenus = [
    {
        title: "Home",
        icon: <CiHome />,
        src: "/"
    },
    {
        title: "今日のおすすめ",
        icon: <CiMoneyBill />,
        src: "/today"
    },
    {
        title: "おすすめチャンネル",
        icon: <CiCoins1 />,
        src: "/developer"
    },
    {
        title: "IT",
        icon: <CiKeyboard />,
        src: "/it"
    },
    {
        title: "日本語",
        icon: <CiChat1 />,
        src: "/jap"
    },
    {
        title: "トレーニング",
        icon: <CiDumbbell />,
        src: "/training"
    },
    {
        title: "野球",
        icon: <CiBaseball />,
        src: "/baseball"
    },
    {
        title: "音楽",
        icon: <CiMusicNote1 />,
        src: "/music"
    },
];

export const searchKeyword = [
{
        title: "HTML",
        src: "/search/html"
    },
    {
        title: "CSS",
        src: "/search/css"
    },
    {
        title: "JavaScript",
        src: "/search/javascript"
    },
    {
        title: "React.js",
        src: "/search/react.js"
    },
    {
        title: "Vue.js",
        src: "/search/vue.js"
    },
    {
        title: "Next.js",
        src: "/search/next.js"
    },
    {
        title: "Node.js",
        src: "/search/node.js"
    },
    {
        title: "SQL",
        src: "/search/sql"
    },
    {
        title: "JLPT",
        src: "/search/JLPT"
    },
    {
        title: "baseball",
        src: "/search/React Baseball"
    },
    {
        title: "music",
        src: "/search/NewJeans"
    }
];

export const snsLink = [
    {
        title: "github",
        url: "https://github.com/ysBak",
        icon: <AiFillGithub />
    },
    {
        title: "youtube",
        url: "",
        icon: <AiFillYoutube />
    },
    {
        title: "codepen",
        url: "",
        icon: <AiOutlineCodepen />
    },
    {
        title: "instagram",
        url: "",
        icon: <AiOutlineInstagram />
    },
]