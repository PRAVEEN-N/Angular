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