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

In this example, the `ngAfterContentInit` method is used to perform initialization logic that depends on the content projected into the component. The `@ContentChild` decorator is used to query for a reference to the projected content.


/**
 * Angular lifecycle hook that is called after the default change detector has completed checking all of the directive's content.
 * This method is called during every change detection run, immediately after `ngAfterContentInit` and `ngAfterContentChecked` 
 * of child components.
 * 
 * Use this method to perform any custom change detection or cleanup logic that needs to occur after the content has been checked.
 * 
 * Note: This method can be called frequently, so any logic inside it should be optimized for performance.
 * 
 * Example usage:
 * 
 * ```typescript
 * ngAfterContentChecked() {
 *   // Custom logic to execute after content has been checked
 * }
 * ```
 */