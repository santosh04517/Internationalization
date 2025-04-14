import ContactModal from "../components/ContactModal.jsx";


const Home = () => {
    return (
        <div className="mx-auto max-w-7xl px-2">
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src="http://localhost:5173/img.png"
                        className="max-w-sm rounded-lg shadow-2xl"/>
                    <div>
                        <h1 className="text-5xl font-bold">About</h1>
                        <p className="py-6">
                            Dr. Santosh Patil is a Professor in the Department of Mechanical Engineering at Manipal
                            University Jaipur. He teaches Design, Finite Element Methods, and CAD. His area of research
                            includes Mechanics, Basalt/carbon laminates, Stress Analysis, Bone fluid flow, and
                            Internationalization in Higher education. He has published over 40 research papers in
                            peer-reviewed international journals/chapters, attended various international conferences,
                            and has one patent. He was the project manager from 2019 to 2024 in the Erasmus+ CBHE EU
                            Funding of 989,000 euros in the consortium. Other individual cumulative funding raised was
                            up to 15 Lakhs. He has good experience in MoU planning/processing, collaborations, and
                            Internationalization. Conducted 15+ workshops and 6 conferences under the ICAMEN series from
                            2019 to 2022 and, the ICRAFMN series from 2023 to 2025 in India and Abroad.
                        </p>
                        <ContactModal></ContactModal>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
