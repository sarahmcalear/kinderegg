// import React from "react";

// var OpenEggs = React.createClass({
//   // mixins: [ReactFireMixin],
//   render: function(){
//     var openEgg = function(item, index){
//       return (
//         <li key={ index }>
//         { item.text }
//         <span onClick={ this.props.removeItem.bind(this, item['.key']) }
//          style={{color: 'red', marginLeft: '10px', cursor: 'pointer'}}>
//          </span>
//          </li>
//       );
//     };
//     return <ul>{this.props.items.map(openEgg)}</ul>
//   }

// });

// export default React.createClass({
//   render: function(){
//     return (
//         <div className="eggs">
//           <h2>This is from the eggs component</h2>
//         </div>
//       );
//   },

//   mixins: [ReactFireMixin],
//   getInitialState: function(){
//     return {
//       items: [],
//       text: ''
//     };
//   },

//     // var toys = ref.children('opened');
//     // var closedEggs = ref.children('toys');
//   componentWillMount: function() {
//     this.ref = new Firebase("https://kindereggs.firebaseio.com/opened");
//     this.ref.on('value', function(dataSnapshot){
//       var displayedToys = [];
//       dataSnapshot.forEach(function(childSnapshot){
//         var item = childSnapshot.val();
//         item['.key'] = childSnapshot.key();
//         displayedToys.push(item);
//       }.bind(this));
//       this.setState({
//         items: displayedToys
//       }); // forEach
//     }.bind(this)); // on
//   }, // componentWillMount

//   componentWillUnmount: function() {
//     this.ref.off();
//   },

//   onChange: function(e) {
//     this.setState({text: e.target.value});
//   },

//   removeItem: function(key) {
//     console.log('removeItem()', key);
//     var ref = new Firebase('https://kindereggs.firebaseio.com/opened');
//     ref.child(key).remove();
//   },

//   handleSubmit: function(e){
//     e.preventDefault();
//     this.ref.items.push({
//       text: this.state.text
//     });
//     this.setState({ text: "" });
//   },



//   // open: function(){
//   //   this.setState({this.opened = true});
//   // },

//   render: function(){
//     return (
//       <div>
//         <h3>Here are all the open eggs</h3>
//         <OpenEggs items={ this.state.items } removeItem = { this.removeItem } />
//         <form onSubmit={ this.handleSubmit }>
//           <input onChange={ this.onChange } value={ this.state.text} />
//           <button>{ 'Open #' (this.state.items.length)}</button>
//         </form>
//       </div>
//     )
//   }
// });
