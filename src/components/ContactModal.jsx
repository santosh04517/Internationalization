

const ContactModal = () => {

    return (
      <div>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button className="btn btn-primary" onClick={()=>document.getElementById('my_modal_1').showModal()}>Consult us</button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Consult Here</h3>
            <p className="py-4">Press ESC key or click the button below to close</p>
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