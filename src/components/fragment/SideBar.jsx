import React, { useContext } from "react";
import "../assets/scss/SideBar.scss";
import SideBarOptions from "./SideBarOptions";
import { ThemeContext } from "../../api/Theme";
import {
    ExploreOutlined,
    HomeOutlined,
    PlaylistPlay,
    SearchOutlined,
} from "@material-ui/icons";
import { NavLink } from "react-router-dom";

function SideBar() {
    const useStyle = useContext(ThemeContext);
    return (
        <aside style={useStyle.component} className={"aside-bar"}>
            <div className="aside-bar-container">
                <p className={"p1"}>
                    <span className=" font-[Montserrat]">LIBRARY</span>
                </p>
                {/* <SideBarOptions className={"lib-sub"}    href={"/home"} title={"Home"} /> */}
                <ul className="pt-4 pl-4 pb-8">
                    <li className="mb-5">
                        <NavLink to={"/home"} className="flex justify-start items-center">
                            <i class="fa-solid fa-house pr-4"></i>
                            <p className="font-[500] font-[Montserrat] text-sm">Home</p>
                        </NavLink>
                    </li>
                    <li className="mb-5">
                        <NavLink
                            to={"/home/about"}
                            className="flex justify-start items-center"
                        >
                            <i class="fa-solid fa-address-card pr-4"></i>
                            <p className="font-[500] font-[Montserrat] text-sm">About</p>
                        </NavLink>
                    </li>
                    {/* <li>
                        <NavLink
                            to={"/home/search"}
                            className="flex justify-start items-center"
                        >
                            <i class="fa-solid fa-magnifying-glass pr-4"></i>
                            <p className="font-[500] font-[Montserrat] text-sm"> Search</p>
                        </NavLink>
                    </li> */}
                </ul>

                {/*<SideBarOptions className={"lib-sub"} Icon={AlbumIcon} href={"/home/album"}  title={"Album"}/>
                <SideBarOptions className={"lib-sub"} Icon={EmojiPeopleIcon} href={"/home/artist"}  title={"Artist"}/>*/}
            </div>
            <div className="aside-bar-container playlist">
                <p className={"p1"}>
                    <span className="font-[Montserrat]">MY PLAYLIST</span>
                </p>
                <ul className="pt-4 pl-4 pb-8">
                    <li className="mb-5">
                        <NavLink
                            to={"/home/playlist/instrumental"}
                            className="flex justify-start items-center"
                        >
                            <i class="fa-solid fa-guitar pr-4"></i>
                            <p className="font-[500] font-[Montserrat] text-sm">
                                Instrumental
                            </p>
                        </NavLink>
                    </li>
                    <li>
                    <NavLink
                            to={"/home/playlist/electronic"}
                            className="flex justify-start items-center"
                        >
                           <i class="fa-solid fa-drum-steelpan pr-4"></i>
                            <p className="font-[500] font-[Montserrat] text-sm">
                                Electronic
                            </p>
                        </NavLink>
                    </li>
                </ul>


            </div>
        </aside>
    );
}

/*
 *
 * */
export default SideBar;
