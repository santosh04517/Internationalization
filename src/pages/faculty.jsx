import {PrismicProvider} from "@prismicio/react";
import {client} from "../utils/prismic.js";
import FacultyFunds from "../components/facultyFunds.jsx";

const Faculty = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto px-2">
                <div className="min-h-screen">
                    <div className="">
                        <div className="mx-auto mb-6 mt-12 max-w-7xl">
                            <h1 className="text-5xl font-bold text-center flex justify-center mx-auto space-x-2">
                                <span>Faculty Exchange</span>
                            </h1>
                        </div>
                    </div>
                    <div className="my-12 mx-auto">
                        <PrismicProvider client={client}>
                            <FacultyFunds />
                        </PrismicProvider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faculty;