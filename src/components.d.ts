/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface TorqButton {
    /**
    * Four button choices are: primary, callToAction, outline, and text
    */
    'buttontype': 'primary' | 'callToAction' | 'outline' | 'text';
  }
  interface TorqButtonAttributes extends StencilHTMLAttributes {
    /**
    * Four button choices are: primary, callToAction, outline, and text
    */
    'buttontype'?: 'primary' | 'callToAction' | 'outline' | 'text';
  }
}

declare global {
  interface StencilElementInterfaces {
    'TorqButton': Components.TorqButton;
  }

  interface StencilIntrinsicElements {
    'torq-button': Components.TorqButtonAttributes;
  }


  interface HTMLTorqButtonElement extends Components.TorqButton, HTMLStencilElement {}
  var HTMLTorqButtonElement: {
    prototype: HTMLTorqButtonElement;
    new (): HTMLTorqButtonElement;
  };

  interface HTMLElementTagNameMap {
    'torq-button': HTMLTorqButtonElement
  }

  interface ElementTagNameMap {
    'torq-button': HTMLTorqButtonElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
