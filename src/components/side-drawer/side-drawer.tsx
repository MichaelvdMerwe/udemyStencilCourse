import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: 'side-drawer',
  styleUrl: './side-drawer.scss',
  shadow: true,// will polyfill for old browsers that doesnt support the shadow dom
  // scoped: true // similair to shadow but doesnt use a real shadow dom
})

export class SideDrawer {

  // @Prop() title: string;//can modify attributes or properties from outside the component via the prop
  @Prop({ reflectToAttr: true }) title: string;//can modify attributes or properties from outside the component via the prop, by adding the reflect to attr flag it will actually update the attribute in the html as well
  @Prop({ reflectToAttr: true, mutable: true }) open: boolean;


  onCloseDrawer() {
    this.open = false;
  }

  render() {
    // let content = null;
    // if (this.open) {
    //   content = (
    //     <aside>
    //       <header><h1>{this.title}</h1></header>
    //       <main>
    //         <slot></slot>
    //       </main>
    //     </aside>
    //   );
    // }  
    // return content;
    //data can be passed into the slot from outside the component
    //you cannot style the content passed into a slot from within the component, this has to be done outside of this component
    //RENDERING CONDITIONAL CODE ^^
    return (
      <aside>
        <header>
          <h1>{this.title}</h1>
          <button onClick={this.onCloseDrawer.bind(this)}>X</button>
        </header>
        <main>
          <slot></slot>
        </main>
      </aside>
    );
  }
}