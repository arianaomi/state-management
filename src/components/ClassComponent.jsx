class MyFirsInput extends React.Component {
  constructor(props) { // El constructor es una funcion
    super(props)//Para mandar a llamar el constructor de React.Component
    //El state siempre sera un objeto, this hace referencia a la clase en general 
    this.state = {
      name: 'Naomi',
      lastName:' Lopez Puertos',
      isToggleOn: false
    }
  }
  getFullName = () => {
    const { name, lastName } = this.setState
    // El set state nunca llamarlo en el render, se crearia un bug infinito y tampoco en el constructor
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
    return name + ' ' + lastName
  }


  render(){
    console.log(this.state)
    return(
      <div>
        Hi {this.getFullName()}
      </div>
    )
  }
}

ReactDom.render(
  <MyFirsInput/>
  document.getElementById('root')
)