import React from 'react';
import Modal from 'react-modal';

const RemoveExpenseModal = (props) => (
    <Modal
        isOpen={props.modalIsOpen}
        onRequestClose={props.onOpenCloseModal}
        contentLabel="Remove Expense"
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">
            Are you shure you want to remove the expense?
        </h3>
        <button className="button button--modal" onClick={props.onRemove}>
            Yes
        </button>
        <button className="button" onClick={props.onOpenCloseModal}>
            No
        </button>
    </Modal>
);

export default RemoveExpenseModal;