import Footer from "views/shared/components/Footer/Footer"
import Header from "../components/Header/Header"


function RootScreen({ children }: any) {

    return (
        <>

                <Header />
                <div className="mt-3 w-full p-8 bg-white">
                    {children}
                </div>
                <Footer/>
        </>
    )
}

export default RootScreen;
