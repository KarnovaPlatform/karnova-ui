import React, { Component } from 'react'


class TextInput extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: true,
    }
  }

  componentDidMount () {
    this.reload()
  }

  addAutoComplete = (id, list) => {
    function autocomplete (inp, arr) {
      /*the autocomplete function takes two arguments,
      the text field element and an array of possible autocompleted values:*/
      var currentFocus
      /*execute a function when someone writes in the text field:*/
      inp.addEventListener('input', function (e) {
        var a, b, i, val = this.value
        /*close any already open lists of autocompleted values*/
        closeAllLists()
        if (!val) { return false}
        currentFocus = -1
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement('DIV')
        a.setAttribute('id', this.id + 'autocomplete-list')
        a.setAttribute('class', 'autocomplete-items')
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a)
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement('DIV')
            /*make the matching letters bold:*/
            b.innerHTML = '<strong>' + arr[i].substr(0, val.length) + '</strong>'
            b.innerHTML += arr[i].substr(val.length)
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += '<input type=\'hidden\' value=\'' + arr[i] + '\'>'
            /*execute a function when someone clicks on the item value (DIV element):*/
            b.addEventListener('click', function (e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName('input')[0].value
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists()
            })
            a.appendChild(b)
          }
        }
      })
      /*execute a function presses a key on the keyboard:*/
      inp.addEventListener('keydown', function (e) {
        var x = document.getElementById(this.id + 'autocomplete-list')
        if (x) x = x.getElementsByTagName('div')
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++
          /*and and make the current item more visible:*/
          addActive(x)
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--
          /*and and make the current item more visible:*/
          addActive(x)
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault()
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click()
          }
        }
      })

      function addActive (x) {
        /*a function to classify an item as "active":*/
        if (!x) return false
        /*start by removing the "active" class on all items:*/
        removeActive(x)
        if (currentFocus >= x.length) currentFocus = 0
        if (currentFocus < 0) currentFocus = (x.length - 1)
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add('autocomplete-active')
      }

      function removeActive (x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
          x[i].classList.remove('autocomplete-active')
        }
      }

      function closeAllLists (elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName('autocomplete-items')
        for (var i = 0; i < x.length; i++) {
          if (elmnt != x[i] && elmnt != inp) {
            x[i].parentNode.removeChild(x[i])
          }
        }
      }

      /*execute a function when someone clicks in the document:*/
      document.addEventListener('click', function (e) {
        closeAllLists(e.target)
      })
    }

    /*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
      autocomplete(document.getElementById(id), list)

  }

  componentWillReceiveProps (nextProps, nextContext) {
    // let minSize = 3;
    // if (!app._.isEqual(this.props.value , nextProps.value) && this.props.value && this.props.value.length > minSize-1) {
    //   this.addAutoComplete(this.props.id , this.props.data)
    // }
    // else if(!app._.isEqual(this.props.value , nextProps.value) && this.props.value && this.props.value.length < minSize){
    //   // document.getElementById(this.props.id).removeEventListener('input')
    //   // document.getElementById(this.props.id).removeEventListener('keydown')
    // }
    // if(app._.isEqual(this.props.id , 'skillInput')&&
    //   !app._.isEqual(this.props.parent , nextProps.parent))
    //   this.setState({parent:this.props.parent})
  }

  reload = () => {
    this.setState({ loading: true }, () => {
      this.props.getData({},
        Object.assign({} , {
          'size': this.props.size,
        },{
          'parent':this.props.parent
          }
        )
        , () => {
          this.setState({ loading: false , parent:this.props.parent}, () => {
            this.addAutoComplete(this.props.id, this.props.data)
          })
        })
    })
  }

  checkSkill = ()=>{
    if(app._.isEqual(this.props.id , 'skillInput')&&
      !app._.isEqual(this.props.parent , this.state.parent))
      this.reload()
  }

  render () {
    let { value, id, label } = this.props
    let {loading} = this.state;
    if(loading)
    return (
      <div>
        <div>loading...</div>
      </div>
    )
    return (
      <div className="">
        <label htmlFor="input" className="control-label input-label">{app.translate(label)}</label>
        <input id={id} value={value} className="input" type="text" autoComplete="off" onClick={()=>this.checkSkill()}
               onChange={(e) => this.props.onChange(e.target.value)}/>
        <i className="bar"/>
      </div>
    )
  }
}

export default TextInput