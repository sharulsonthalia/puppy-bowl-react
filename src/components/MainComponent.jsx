
const MainComponent = () => {

    return (
    <Routes>
        <Route path = "/" element={<Home/>} />
        <Route path = "/singlePlayer" element={<Blue/>} />
    </Routes>
)

}

export default MainComponent