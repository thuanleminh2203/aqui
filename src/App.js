import { Col, Modal, Row } from 'antd'
import { random } from 'lodash'
import React, { useEffect, useState } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import box from './image/box.png'
// import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
let inteval = null
function App() {
  const [visible, setVisible] = useState(false)
  const [open, setOpen] = useState(false)
  const [fullname, setFullname] = useState('')
  const [err, setErr] = useState('')
  const [select, setSelect] = useState(0)
  const [count, setCount] = useState(0)
  const [confetti, setConfetti] = useState(false)
  // const { width, height } = useWindowSize()

  function onSubmit() {
    if (!fullname) {
      setErr('Vui lòng nhập họ tên')
      return
    }
    setErr('')
    setVisible(false)
    onRandomBox()
  }

  useEffect(() => {
    if (count === 50) {
      clearInterval(inteval)
      setCount(0)
      setOpen(true)
      setConfetti(true)
    }
  }, [count])

  function onRandomBox() {
    inteval = setInterval(() => {
      setCount((preCount) => preCount + 1)
      setSelect(random(1, 12))
    }, 100)
  }
  // startConfetti()
  function closeModalGift() {
    setOpen(false)
    setConfetti(false)
  }


  return (
    <div className="AppContainer" style={{ height: '100%' }}>
      {confetti && <Confetti numberOfPieces={500} />}
      <div className="AppComponent">
        <div className="Title">vincom</div>
        <div className="Title SubTitle">Hộp quà bí mật</div>
        <Row style={{ paddingTop: '5%' }}>
          {data.map((item) => (
            <Col span={6} key={item} style={{ textAlign: 'center', minWidth: '170px' }}>
              <div>
                <img
                  src={box}
                  alt="cant load image"
                  style={{ cursor: 'pointer' }}
                  className={`${select === item && 'RandomBox'}`}
                />
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
      <Modal
        visible={open}
        footer={null}
        className="ModalGiftContainer"
        onCancel={() => closeModalGift()}
        destroyOnClose={true}
      >
        <div className="GiftContainer"></div>
      </Modal>

      <Modal
        visible={visible}
        footer={null}
        className="ModalContainer"
        onCancel={() => setVisible(false)}
        destroyOnClose={true}
      >
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
            <span className="ErrorContainer">{err}</span>
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
