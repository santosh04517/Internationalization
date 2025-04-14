

const ContactModal = () => {

    return (
      <div>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button className="btn btn-primary" onClick={()=>document.getElementById('my_modal_1').showModal()}>Socials</button>
        <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
                <p className="pt-4 pb-1">Linkedin: <a href="https://www.linkedin.com/in/dr-santosh-patil-28b92650/" target="_blank">https://www.linkedin.com/in/dr-santosh-patil-28b92650/</a></p>
                <p className="py-1">Google Scholar: <a href="https://scholar.google.com/citations?user=5g1MIjAAAAAJ&hl=en" target="_blank">https://scholar.google.com/citations?user=5g1MIjAAAAAJ&hl=en</a></p>
                <p className="pt-1 pb-4">Email: santosh.patil@jaipur.manipal.edu</p>
                <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
      </div>
    );
};

export default ContactModal;