import { Component } from "@stencil/core";

@Component({
  /**
   * Tag name of the web component. Ideally, the tag name must be globally unique,
   * so it's recommended to choose an unique prefix for all your components within the same collection.
   *
   * In addition, tag name must contain a '-'
   */
  tag: 'string',

  /**
   * If `true`, the component will use scoped stylesheets. Similar to shadow-dom,
   * but without native isolation. Defaults to `false`.
   */
  scoped?: false,

  /**
   * If `true`, the component will use native shadow-dom encapsulation, it will fallback to `scoped` if the browser
   * does not support shadow-dom nativelly. Defaults to `false`.
   */
  shadow?: true,

  /**
   * Relative URL to some external stylesheet file. It should be a `.css` file unless some
   * external plugin is installed like `@stencil/sass`.
   */
  styleUrl?: 'string',

  /**
   * Similar as `styleUrl` but allows to specify different stylesheets for different modes.
   */
  // styleUrls?: 'string[] | d.ModeStyles',

  /**
   * String that contains inlined CSS instead of using an external stylesheet.
   * The performance characteristics of this feature are the same as using an external stylesheet.
   *
   * Notice, you can't use sass, or less, only `css` is allowed using `styles`, use `styleUrl` if you need more advanced features.
   */
  // styles?: 'string',

  /**
   * Array of relative links to folders of assets required by the component.
   */
  // assetsDirs?: 'string[]',

  /**
   * @deprecated Use `assetsDirs` instead
   */
  // assetsDir?: 'string',
})

export class MyExplanationComponent {

}
// Embedding or Nesting Components
// Components can be composed easily by adding the HTML tag to the JSX code.Since the components are just HTML tags, nothing needs to be imported to use a Stencil component within another Stencil component.
// Example: https://stenciljs.com/docs/component


// PROPS
// Props are custom attribute / properties exposed publicly on the element that developers can provide values for.Children components should not know about or reference parent components, so Props should be used to pass data down from the parent to the child.Components need to explicitly declare the Props they expect to receive using the @Prop() decorator.Props can be a number, string, boolean, or even an Object or Array.By default, when a member decorated with a @Prop() decorator is set, the component will efficiently re - render.
// Externally, Props are set on the element.
//In HTML, you must set attributes using dash-case: <todo-list color="blue" favorite-number="24" is-selected="true"></todo-list>
//in JSX you set an attribute using camelCase:<todo-list color="blue" favoriteNumber={24} isSelected="true"></todo-list>

// Prop mutability
// It's important to know, that a Prop is by default immutable from inside the component logic. Once a value is set by a user, the component cannot update it internally.
// Set prop mutability to true if you want to manipulate it in the component logic @Prop({ mutable: true })

// Prop names are usually the same when they are converted to attributes with the exception being that camel case will be changed to hyphen case, isValid will become is-valid
// however you can set the attribute name with the following @Prop({ attribute: 'valid' }) isValid: boolean;


// When a "prop" is set to "reflect", it means that their value will be rendered in the DOM as an HTML attribute:
// @Prop({ reflect: true }) message = 'Hello';
// @Prop({ reflect: false }) value = 'The meaning of life...';
// @Prop({ reflect: true }) number = 42;
// PRODUCES THE FOLLOWING ELEMENT
// <my-cmp message="Hello" number="42"></my-cmp>

// To validate props you set a @Watch decorator on the property like so:
// @Prop() name: string = 'Stencil';
// @Watch('name')
// validateName(newValue: string, oldValue: string) 

// State Decorator
// The @State() decorator can be used to manage internal data for a component.This means that a user cannot modify this data from outside the component, but the component can modify it however it sees fit.Any changes to a @State() property will cause the components render function to be called again.
// only use @State when you know that the value will not change or that it does NOT need to trigger a re-rendering

// When a component updates because a state change (props or state change), the render() method is scheduled to run.

// Watch Decorator
// When a user updates a property, Watch will fire what ever method it's attached to and pass that method the new value of the prop along with the old value. Watch is useful for validating props or handling side effects. Watch decorator does not fire when a component initially loads.

// Handling arrays and objects
// To update array or object data, use the following techniques which are fast - becoming a core part of the modern JavaScript toolbox.
// Updating arrays
// For arrays, this means that the standard mutable array operations such as push() and unshift() won't work. Instead, non-mutable array operators such as map() and filter(), and the ES6 spread operator syntax, should be used as they return a copy of a new array.
// For example, to push a new item to an array, create a new array with the existing values and the new value at the end
// Updating an object
// The spread operator should also be used to update objects.As with arrays, mutating an object will not trigger a view update in Stencil, but returning a new copy of the object will.Below is an example:

////////////////////////////////////////////
/////////////HOW TO USE JSX/////////////////
////////////////////////////////////////////
// https://stenciljs.com/docs/templating-jsx
////////////////////////////////////////////

// PARENT CHILD COMPONENTS WITH EL
// https://stenciljs.com/docs/host-element

// DEFINING CUSTOM EVENTS
// https://stenciljs.com/docs/events

// Creating public methods(similair to onClick for a button)
// https://stenciljs.com/docs/methods

