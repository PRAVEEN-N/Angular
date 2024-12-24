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