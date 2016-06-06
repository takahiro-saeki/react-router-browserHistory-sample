#react-router browserHistory push samples
I had a problem because I wanted to use the location.assign() on the react-router.
but I don't know that How to use them.
fortunately, I find the solution.

for example.
```
import React, {Component} from 'react';
import { browserHistory } from 'react-router';

class hoge extends Component {
  hogeClick() {
    browserHistory.push('your path')
  }

  render() {
    return (
      <div onClick={this.hogeClick}>Click me!</div>
    )
  }
}
```

if you don't mind. check this Repository.

##USAGE
```
$ npm i
```

```
$ npm start
```
and you access to
```
http://localhost:8080/template
```
