import './index.css'

import {Component} from 'react'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  onMango = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  onBanana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango} = this.state
    const {banana} = this.state
    return (
      <div className="bgCol">
        <div className="bgCont">
          <h1 className="heading">
            Bob ate <span className="span">{mango}</span> mangoes{' '}
            <span className="span">{banana}</span> bananas
          </h1>
          <div className="cont">
            <div className="item">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="image"
                alt="mango"
              />
              <div className="buttonCont">
                <button type="button" className="button" onClick={this.onMango}>
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="item">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="image"
                alt="banana"
              />
              <div className="buttonCont">
                <button
                  type="button"
                  className="button"
                  onClick={this.onBanana}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
