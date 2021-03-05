import { Col, Modal, Row } from 'antd'
import React, { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import box from './image/box.png'

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

function App() {
  const [visible, setVisible] = useState(false)
  const [fullname, setFullname] = useState('')
  const [err, setErr] = useState('')
  function onSubmit() {
    if (fullname) {
      setErr('Vui lòng nhập họ tên')
      return
    }
  }
  console.log('===err==',err);
  return (
    <div className="AppContainer" style={{ height: '100%' }}>
      <div className="AppComponent">
        <div className="Title">vincom</div>
        <div className="Title">Hộp quà bí mật</div>
        <Row style={{ paddingTop: '5%' }}>
          {data.map((item) => (
            <Col span={6} key={item} style={{ textAlign: 'center', minWidth: '170px' }}>
              <div>
                <img src={box} alt="cant load image" style={{ cursor: 'pointer' }} />
              </div>
            </Col>
          ))}
        </Row>
        <div
          style={{
            marginTop: '30px',
            marginLeft: '50%',
            transform: 'translateX(-50%)',
            width: '150px',
          }}
        >
          <div>
            <div className="ButtonContainer" onClick={() => setVisible(true)}>
              Chơi ngay
            </div>
          </div>
        </div>
      </div>
      <Modal visible={visible} footer={null} className="ModalContainer">
        <div style={{ width: '80%', margin: 'auto', height: '293px' }}>
          <div className="Title">bạn vui lòng nhập thông tin để bên mình gửi quà nhé</div>
          <div style={{ marginTop: '10px' }}>
            Họ và tên<span style={{ color: 'red' }}>*</span>
          </div>
          <div style={{ marginTop: '10px' }}>
            <input
              onChange={(e) => setFullname(e.target.value)}
              value={fullname}
              style={{ width: '100%' }}
              placeholder="Họ và tên"
            />
          </div>
          <div>
            <span>{err}</span>
          </div>
          <div className="ButtonModal" onClick={() => onSubmit()}>
            Xác nhận
          </div>
          <div className="SubTitleModal">Vui lòng nhập đúng thông tin để nhận quà</div>
        </div>
      </Modal>
    </div>
  )
}

export default App
