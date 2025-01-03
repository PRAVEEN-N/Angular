# Angular Lifecycle Hooks

This Repository is for learning Angular.

## `ngOnInit`

`ngOnInit` is a lifecycle hook in Angular that is called once, after the first `ngOnChanges`. It is typically used to perform component initialization, such as fetching data from a service or setting up initial state.

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  template: '<p>Example works!</p>'
})
export class ExampleComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    // Initialization logic here
    console.log('ngOnInit called');
  }
}
```

`ngOnChanges` is another lifecycle hook that is called before `ngOnInit` and whenever one or more data-bound input properties change. It receives a SimpleChanges object that contains the current and previous values of the changed properties.

```typescript
import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-example',
  template: '<p>Example works!</p>'
})
export class ExampleComponent implements OnChanges {
  @Input() data: string;

  ngOnChanges(changes: SimpleChanges): void {
    // Respond to input property changes here
    console.log('ngOnChanges called', changes);
  }
}
```
## ngDoCheck

The `ngDoCheck` lifecycle hook is a method in Angular that allows developers to implement their own change detection logic. This method is called during every change detection run, immediately after the default change detector has completed its checks. It is useful for detecting and acting upon changes that Angular's default change detection mechanism might not catch.

### Usage

To use `ngDoCheck`, you need to implement the `DoCheck` interface in your component class and define the `ngDoCheck` method. This method will be called by Angular whenever it performs change detection for that component.

## `ngAfterContentInit`

The `ngAfterContentInit` lifecycle hook is called after Angular has fully initialized all of the content of a directive or component. This hook is particularly useful when you need to perform any additional initialization that depends on the projected content being available.

### Usage

To use `ngAfterContentInit`, you need to implement the `AfterContentInit` interface in your component class and define the `ngAfterContentInit` method. This method will be called by Angular once the content projection is complete.

```typescript
import { Component, AfterContentInit, ContentChild } from '@angular/core';

@Component({
    selector: 'app-example',
    template: `
        <ng-content></ng-content>
        <p>Example works!</p>
    `
})
export class ExampleComponent implements AfterContentInit {
    @ContentChild('projectedContent') content: any;

    ngAfterContentInit(): void {// It will be called after ContentChild is intialized
        // Initialization logic that depends on projected content
        console.log('ngAfterContentInit called', this.content); 
    }
}
```

## `ngAfterContentChecked`

The `ngAfterContentChecked` lifecycle hook is called after Angular has checked the content projected into the component. This hook is useful for implementing custom change detection logic that needs to run after the content has been checked.

### Usage

To use `ngAfterContentChecked`, you need to implement the `AfterContentChecked` interface in your component class and define the `ngAfterContentChecked` method. This method will be called by Angular after each change detection cycle for the projected content.

```typescript
import { Component, AfterContentChecked, ContentChild } from '@angular/core';

@Component({
    selector: 'app-example',
    template: `
        <ng-content></ng-content>
        <p>Example works!</p>
    `
})
export class ExampleComponent implements AfterContentChecked {
    @ContentChild('projectedContent') content: any;

    ngAfterContentChecked(): void {
        // Custom change detection logic that depends on projected content
        console.log('ngAfterContentChecked called', this.content);
    }
}
```

In this example, the `ngAfterContentChecked` method is used to perform custom change detection logic that depends on the projected content. The `@ContentChild` decorator is used to query for a reference to the projected content within the component's template.


## `ngAfterViewInit`

The `ngAfterViewInit` lifecycle hook is called after Angular has fully initialized a component's view. This hook is particularly useful when you need to perform any additional initialization that depends on the component's view being fully rendered.

### Usage

To use `ngAfterViewInit`, you need to implement the `AfterViewInit` interface in your component class and define the `ngAfterViewInit` method. This method will be called by Angular once the component's view has been initialized.

```typescript
import { Component, AfterViewInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-example',
    template: `
        <p #viewChildElement>Example works!</p>
    `
})
export class ExampleComponent implements AfterViewInit {
    @ViewChild('viewChildElement') viewChild: any;

    ngAfterViewInit(): void {
        // Initialization logic that depends on the view being fully initialized
        console.log('ngAfterViewInit called', this.viewChild);
    }
}
```

In this example, the `ngAfterViewInit` method is used to perform initialization logic that depends on the component's view being fully rendered. The `@ViewChild` decorator is used to query for a reference to a DOM element within the component's template.


## `ngAfterViewChecked`

The `ngAfterViewChecked` lifecycle hook is called after Angular has checked the component's view and its children. This hook is useful for implementing custom change detection logic that needs to run after the view has been checked.

### Usage

To use `ngAfterViewChecked`, you need to implement the `AfterViewChecked` interface in your component class and define the `ngAfterViewChecked` method. This method will be called by Angular after each change detection cycle for the component's view.

```typescript
import { Component, AfterViewChecked, ViewChild } from '@angular/core';

@Component({
    selector: 'app-example',
    template: `
        <p #viewChildElement>Example works!</p>
    `
})
export class ExampleComponent implements AfterViewChecked {
    @ViewChild('viewChildElement') viewChild: any;

    ngAfterViewChecked(): void {
        // Custom change detection logic that depends on the view being checked
        console.log('ngAfterViewChecked called', this.viewChild);
    }
}
```

In this example, the `ngAfterViewChecked` method is used to perform custom change detection logic that depends on the component's view being checked. The `@ViewChild` decorator is used to query for a reference to a DOM element within the component's template.


## `ngOnDestroy`

The `ngOnDestroy` lifecycle hook is called just before Angular destroys the component. This hook is useful for performing any necessary cleanup, such as unsubscribing from observables, detaching event handlers, or releasing resources that were allocated during the component's lifecycle.

### Usage

To use `ngOnDestroy`, you need to implement the `OnDestroy` interface in your component class and define the `ngOnDestroy` method. This method will be called by Angular when the component is about to be destroyed.

```typescript
import { Component, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-example',
    template: `
        <p>Example works!</p>
    `
})
export class ExampleComponent implements OnDestroy {
    ngOnDestroy(): void {
        // Cleanup logic here
        console.log('ngOnDestroy called');
    }
}
```

In this example, the `ngOnDestroy` method is used to perform cleanup logic before the component is destroyed. This is important for preventing memory leaks and ensuring that resources are properly released.

## `Renderer2`

`Renderer2` is a service in Angular that provides an abstraction for manipulating the DOM. It is designed to be used in a platform-agnostic way, allowing your code to run not only in the browser but also in other environments such as server-side rendering with Angular Universal.

### Usage

To use `Renderer2`, you need to inject it into your component or directive and use its methods to perform DOM manipulations. This approach is preferred over directly accessing the DOM using native methods like `document.querySelector` or `element.nativeElement`.

```typescript
import { Component, Renderer2, ElementRef } from '@angular/core';

@Component({
    selector: 'app-example',
    template: `
        <p>Example works!</p>
        <button (click)="changeText()">Change Text</button>
    `
})
export class ExampleComponent {
    constructor(private renderer: Renderer2, private el: ElementRef) { }

    changeText(): void {
        const p = this.el.nativeElement.querySelector('p');
        this.renderer.setProperty(p, 'textContent', 'Text changed by Renderer2');
    }
}
```

### Common Methods

- `setAttribute(el: any, name: string, value: string, namespace?: string | null): void`: Sets an attribute on an element.
- `removeAttribute(el: any, name: string, namespace?: string | null): void`: Removes an attribute from an element.
- `addClass(el: any, name: string): void`: Adds a CSS class to an element.
- `removeClass(el: any, name: string): void`: Removes a CSS class from an element.
- `setStyle(el: any, style: string, value: any, flags?: RendererStyleFlags2): void`: Sets a style property on an element.
- `removeStyle(el: any, style: string, flags?: RendererStyleFlags2): void`: Removes a style property from an element.
- `setProperty(el: any, name: string, value: any): void`: Sets a property on an element.
- `appendChild(parent: any, newChild: any): void`: Appends a child element to a parent element.
- `removeChild(parent: any, oldChild: any, isHostElement?: boolean): void`: Removes a child element from a parent element.

Using `Renderer2` ensures that your code is compatible with different rendering environments and helps maintain a clean separation between your application logic and the underlying DOM manipulation.


## `@HostListener`

The `@HostListener` decorator in Angular allows you to listen to events on the host element of a directive or component. This decorator provides a way to handle events in a clean and declarative manner, without having to manually add event listeners in the component's code.

### Usage

To use `@HostListener`, you need to import it from `@angular/core` and apply it to a method in your directive or component class. The method will be called whenever the specified event is triggered on the host element.

```typescript
import { Directive, HostListener } from '@angular/core';

@Directive({
    selector: '[appExample]'
})
export class ExampleDirective {
    @HostListener('click', ['$event'])
    handleClick(event: Event): void {
        // Handle the click event
        console.log('Host element clicked', event);
    }
}
```

In this example, the `handleClick` method is decorated with `@HostListener('click', ['$event'])`, which means it will be called whenever the host element is clicked. The `$event` parameter allows you to access the event object.

### Common Use Cases

- Handling user interactions such as clicks, mouse movements, and keyboard events.
- Implementing custom behavior for host elements.
- Enhancing the functionality of existing elements without modifying their templates.

### Example

```typescript
import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-example',
    template: `
        <p>Click anywhere in this component to trigger the event.</p>
    `
})
export class ExampleComponent {
    @HostListener('document:click', ['$event'])
    handleDocumentClick(event: Event): void {
        // Handle the document click event
        console.log('Document clicked', event);
    }
}
```

In this example, the `handleDocumentClick` method is decorated with `@HostListener('document:click', ['$event'])`, which means it will be called whenever a click event occurs anywhere in the document. This can be useful for implementing global event handlers or detecting clicks outside of a specific element.

Using `@HostListener` helps keep your event handling logic organized and encapsulated within your components and directives, making your code more maintainable and easier to understand.


## `@HostBinding`

The `@HostBinding` decorator in Angular allows you to bind a property of the host element to a property in the directive or component class. This decorator provides a way to dynamically update the host element's properties or attributes based on the state of the directive or component.

### Usage

To use `@HostBinding`, you need to import it from `@angular/core` and apply it to a property or getter in your directive or component class. The property or getter will be bound to the specified property or attribute of the host element.

```typescript
import { Directive, HostBinding } from '@angular/core';

@Directive({
    selector: '[appExample]'
})
export class ExampleDirective {
    @HostBinding('class.active') isActive = true;
}
```

In this example, the `isActive` property is decorated with `@HostBinding('class.active')`, which means the `active` CSS class will be added to the host element whenever `isActive` is `true`.

### Common Use Cases

- Dynamically updating CSS classes or styles based on the state of the directive or component.
- Binding host element properties such as `disabled`, `hidden`, or `title`.
- Creating reusable directives that can modify the appearance or behavior of host elements.

### Example

```typescript
import { Component, HostBinding } from '@angular/core';

@Component({
    selector: 'app-example',
    template: `
        <button (click)="toggleActive()">Toggle Active</button>
        <p>Check the class of this component's host element.</p>
    `
})
export class ExampleComponent {
    @HostBinding('class.active') isActive = false;

    toggleActive(): void {
        this.isActive = !this.isActive;
    }
}
```

In this example, the `isActive` property is decorated with `@HostBinding('class.active')`, which means the `active` CSS class will be toggled on the host element whenever the `toggleActive` method is called. This can be useful for creating interactive components that respond to user actions.

Using `@HostBinding` helps keep your component and directive logic encapsulated and makes it easier to manage the state and appearance of host elements in a declarative manner.

## View Encapsulation

Angular provides three strategies for view encapsulation, which determine how styles are applied to components. These strategies are `ViewEncapsulation.None`, `ViewEncapsulation.Emulated`, and `ViewEncapsulation.ShadowDom`.

### `ViewEncapsulation.None`

When `ViewEncapsulation.None` is used, Angular does not apply any sort of encapsulation to the component's styles. This means that the styles defined in the component will be applied globally to the entire application.

```typescript
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-example',
    template: `
        <p>Example works!</p>
    `,
    styles: [`
        p {
            color: red;
        }
    `],
    encapsulation: ViewEncapsulation.None
})
export class ExampleComponent { }
```

In this example, the paragraph text will be red not only in the `ExampleComponent` but also in any other component that contains a `<p>` element.

### `ViewEncapsulation.Emulated`

`ViewEncapsulation.Emulated` is the default encapsulation mode in Angular. It emulates native Shadow DOM behavior by adding unique attributes to the component's host element and its descendants. This ensures that the styles are scoped to the component and do not affect other components.

```typescript
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-example',
    template: `
        <p>Example works!</p>
    `,
    styles: [`
        p {
            color: blue;
        }
    `],
    encapsulation: ViewEncapsulation.Emulated
})
export class ExampleComponent { }
```

In this example, the paragraph text will be blue only within the `ExampleComponent`, and other components will not be affected by these styles.

### `ViewEncapsulation.ShadowDom`

When `ViewEncapsulation.ShadowDom` is used, Angular leverages the native Shadow DOM API to encapsulate the component's styles. This provides true style encapsulation, ensuring that the styles are scoped to the component and do not leak out to other components.

```typescript
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-example',
    template: `
        <p>Example works!</p>
    `,
    styles: [`
        p {
            color: green;
        }
    `],
    encapsulation: ViewEncapsulation.ShadowDom
})
export class ExampleComponent { }
```

In this example, the paragraph text will be green only within the `ExampleComponent`, and the styles will not affect other components. This is because the styles are encapsulated within the component's Shadow DOM.

### Summary

- `ViewEncapsulation.None`: No encapsulation, styles are applied globally.
- `ViewEncapsulation.Emulated`: Default mode, styles are scoped to the component using unique attributes.
- `ViewEncapsulation.ShadowDom`: Uses native Shadow DOM for true encapsulation, styles are scoped to the component.

Choosing the appropriate view encapsulation strategy depends on your specific use case and the level of style encapsulation you need for your components.


## `of` and `from` in RxJS

RxJS (Reactive Extensions for JavaScript) is a library for reactive programming using Observables. It provides powerful operators for handling asynchronous events and data streams. Two commonly used creation operators in RxJS are `of` and `from`.

### `of`

The `of` operator creates an Observable that emits the arguments you provide, in the order you provide them, and then completes.

#### Usage

```typescript
import { of } from 'rxjs';

const observable = of(1, 2, 3, 4, 5);

observable.subscribe({
    next: value => console.log(value),
    complete: () => console.log('Complete')
});
```

In this example, the Observable created by `of` emits the values `1`, `2`, `3`, `4`, and `5`, and then completes. The `subscribe` method is used to handle the emitted values and the completion event.

### `from`

The `from` operator creates an Observable from an array, an array-like object, a Promise, an iterable object, or an Observable-like object.

#### Usage with Array

```typescript
import { from } from 'rxjs';

const array = [10, 20, 30, 40, 50];
const observable = from(array);

observable.subscribe({
    next: value => console.log(value),
    complete: () => console.log('Complete')
});
```

In this example, the Observable created by `from` emits the values from the array `[10, 20, 30, 40, 50]` and then completes.

#### Usage with Promise

```typescript
import { from } from 'rxjs';

const promise = Promise.resolve('Hello, RxJS!');
const observable = from(promise);

observable.subscribe({
    next: value => console.log(value),
    complete: () => console.log('Complete')
});
```

In this example, the Observable created by `from` emits the resolved value of the Promise `'Hello, RxJS!'` and then completes.

### Summary

- `of`: Creates an Observable that emits the provided arguments in order and then completes.
- `from`: Creates an Observable from various sources such as arrays, Promises, and iterables.

Both `of` and `from` are useful for creating Observables from different types of data sources, allowing you to work with them in a reactive programming style.

### Observables vs Subjects

```typescript
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {ajax} from 'rxjs/ajax';
@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit{
  ngOnInit(): void {
    // let obs = new Observable((observer) => {
    //   observer.next(Math.random());
    // });
    // obs.subscribe((data) => {
    //   console.log(data);
    // });
    // obs.subscribe((data) => {
    //   console.log(data);
    // });
    // The observer will not emit same data to both subscribers because it is a unicast

    // let subject = new Subject();

    // subject.subscribe((data) => {
    //   console.log(data);
    // });
    // subject.subscribe((data) => {
    //   console.log(data);
    // });
    // subject.next(Math.random());
    // The subject will emit same data to both subscribers because it is a multicast

    const subject = new Subject();
    const data = ajax('https://randomuser.me/api/');
    // data.subscribe((response) => {
    //   console.log(response);
    // });
    // data.subscribe((response) => {
    //   console.log(response);
    // });
    // ajax call returns an Observable and for each subscriotion it will make a new request

    subject.subscribe((response) => {
      console.log(response);
    });
    subject.subscribe((response) => {
      console.log(response);
    });
    data.subscribe(subject);
    // If subject is used it will not make request for every subscriber.It makes only one request and emit the same data to both subscribers

  }
}
```