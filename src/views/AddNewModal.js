// ** React Imports
import { useState, useEffect } from 'react'

// ** Third Party Components
import Flatpickr from 'react-flatpickr'
import { MapPin, DollarSign, X } from 'react-feather'
import { Button, Modal, ModalHeader, ModalBody, FormGroup, InputGroup, InputGroupAddon, InputGroupText, Input, Label } from 'reactstrap'

// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'

const AddNewModal = (prop) => {
  //get initial data from 
  // useEffect(()=>{
  //   if(props.currentId===""){
  //     setValues({
  //       ...initialValues
  //     })
  //   }else{
  //     //if we get props.currentId mean this is update opration and now we setValue to pass to the Cntact.js
  //     setValues({
  //       ...props.contactObject[props.currentId]
  //     })
  //   }
  // },[props.)
  // editAction

  // const handleFormSubmit = (event)=>{
  //   event.preventDefault();
  //   props.addOrEdit(values);
  //   setValues(initialValues);
  // }
  // ** State
  const [Picker, setPicker] = useState(new Date())

  // ** Custom close btn
  const CloseBtn = <X className='cursor-pointer' size={15} onClick={prop.handleModal} />

  return (
    <Modal
      isOpen={prop.open}
      toggle={prop.handleModal}
      className='sidebar-sm'
      modalClassName='modal-slide-in'
      contentClassName='pt-0'
    >
      <ModalHeader className='mb-3' toggle={prop.handleModal} close={CloseBtn} tag='div'>
        <h5 className='modal-title'>New Record</h5>
      </ModalHeader>
      <ModalBody className='flex-grow-1'>
       
        <FormGroup>
          <Label for='full-name'>Name</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <MapPin size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='full-name' placeholder='Afghanistan' />
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <Label for='post'>Initial</Label>
          <InputGroup>
            <Input id='post' placeholder='eg. Afghanistan : AF' />
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <Label for='code'>Country code</Label>
          <InputGroup>
            <Input id='post' placeholder='eg. Afghanistan : 004' />
          </InputGroup>
        </FormGroup>

        <FormGroup className='mb-4'>
          <Label for='Currency'>Currency</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <DollarSign size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input type='text' id='Currency' />
          </InputGroup>
        </FormGroup>

        <Button className='mr-1' color='primary' onClick={prop.handleModal}>
          Submit
        </Button>
        <Button color='secondary' onClick={prop.handleModal} outline>
          Cancel
        </Button>

      </ModalBody>
    </Modal>
  )
}

export default AddNewModal
