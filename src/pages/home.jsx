import ContactModal from "../components/ContactModal.jsx";
import Hero from "../components/ContactModal.jsx";

const Home = () => {
  return (
    <div className="mx-auto max-w-7xl px-2">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl" />
            <div>
            <h1 className="text-5xl font-bold">About Me</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <ContactModal></ContactModal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
