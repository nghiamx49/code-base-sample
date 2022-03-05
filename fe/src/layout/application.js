import Navbar from "../components/navbar";

export default function ApplicationLayout({children}) {
    return (
        <>
        <Navbar />
        {children}
        </>
    )
}