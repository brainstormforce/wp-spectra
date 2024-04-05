/* eslint-disable jsdoc/no-undefined-types, jsdoc/check-property-names */
import Modal from './modal';
import ModalTitle from './modal-title';

/**
 * The Modal component provides a way to display content in a modal dialog box.
 *
 * @typedef {Object} ModalProps
 * @property {boolean}    [open=false]          - Whether the modal should be displayed or not.
 * @property {Function}   setOpen               - A function to call to set the state of the modal.
 * @property {number}     [width=560]           - The width of the modal.
 * @property {boolean}    [overflowHidden=true] - Whether to hide the overflow of the body when the modal is open.
 * @property {ReactNode}  children              - The content to display in the modal.
 *
 * @typedef {Object} ModalTitleProps - The title of the modal.
 * @property {string}     className             - The class name of the title.
 * @property {ReactNode}  children              - The content to display in the title.
 *
 * @typedef {Object} ModalStatic
 * @property {ModalTitle} Title                 - The ModalTitle component to use as the title of the modal.
 *
 *
 * @typedef {Modal & ModalStatic} ModalComponent
 */

Modal.Title = ModalTitle;

/**
 * The Modal component.
 *
 * @type {ModalComponent}
 * @example
 * import Modal from './Modal'
 */
export default Modal;
