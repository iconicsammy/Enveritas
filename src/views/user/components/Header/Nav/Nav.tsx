import { Link } from "react-router-dom"
import Translated from "views/shared/components/Translated/Translated"

interface Menu {
    labelTranslationKey: string,
    navigateTo: string,
    showInMobile: boolean
}

const menus: Menu[] = [
    {
        labelTranslationKey: 'home',
        navigateTo: '/home',
        showInMobile: true
    },
    {
        labelTranslationKey: 'surveys',
        navigateTo: '/list',
        showInMobile: true
    }
]

function Nav() {
    return (<nav className="bg-white border-b border-gray-300">
        <div
            className="flex items-center justify-between flex-wrap mx-auto max-w-screen-xl"
        >
            <div className="flex items-center mx-2 py-3 md:py-0">
                <div className="flex items-center">

                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menus.map(menu => {
                                if (menu.showInMobile) {
                                    return (<li key={menu.labelTranslationKey}>
                                        <Link to={menu.navigateTo}> <Translated translatationKey={menu.labelTranslationKey} /></Link>


                                    </li>)
                                }
                                return <></>

                            })}
                            <Link to="/newSurvey"> <Translated translatationKey={"newSurvey"} /></Link>
                        </ul>
                    </div>

                    <a href="#" className="font-bold text-xl pr-6"
                    >Enveritas<span className="text-gray-500 font-normal"> <Translated translatationKey="appName" /></span></a
                    >
                </div>

                <ul className="text-sm font-normal hidden md:flex">
                    {menus.map(menu => {
                        return (<li key={menu.navigateTo}
                            className="mx-3 py-4 font-medium text-green-500 border-b-2 border-green-500"
                        >

                            <Link to={menu.navigateTo}> <Translated translatationKey={menu.labelTranslationKey} /></Link>

                        </li>

                        )
                    })}

                </ul>
            </div>

            <div className="flex items-center">

                <div>
                    <Link to="/newSurvey" className="btn mr-10"><Translated translatationKey="newSurvey" /></Link>
                </div>

                <div className="dropdown">
                    <label tabIndex={0} className="leading-3 text-sm text-gray-700">

                        <div className="avatar placeholder">
                            <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                                <span className="text-3xl">U</span>
                            </div>
                        </div>
                    </label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a><Translated translatationKey="logout" /></a></li>
                    </ul>
                </div>

            </div>
        </div>
    </nav>
    )
}

export default Nav
