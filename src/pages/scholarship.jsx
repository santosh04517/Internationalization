import ScholarshipTabs from "../components/scholarship-tabs";

const Scholarship = () => {
  return (
    <div className="min-h-screen max-w-7xl mx-auto px-2">
      <div className="">
        <div className="mx-auto mb-6 mt-12 max-w-7xl">
          
          <h1 className="text-5xl font-bold text-center flex justify-center mx-auto gap-x-2">

            <span>Scholarships</span>
          </h1>
        </div>
      </div>
      <div className="my-12 mx-auto">
        <ScholarshipTabs />
      </div>
    </div>
  );
};

export default Scholarship;
