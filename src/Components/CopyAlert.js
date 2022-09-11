import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function CopyAlert(props) {

    const address = '0xda5dea132f9c30f2f6b513266795fec16426c0c6'

  return (
    <Modal
      {...props}
      size="sm"
      className=''
    >
        <div className='p-2 text-center'>
            <h6 className='border-bottom pb-2 w-100'>Chroma NFT</h6>
            <div className='p-2'>Copy successful</div>
        </div>
    </Modal>
  );
}

export default CopyAlert;