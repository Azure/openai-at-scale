# use-disposable

A hook that creates disposable instances during render phase that works with strict mode.

## Problem

With the introduction of [stricter strict mode in React 18](https://github.com/reactwg/react-18/discussions/19), factories
in hooks like `useMemo` and `useState` are called twice but `useEffect` still disposes once. The component will be mounted and unmounted. This makes
it hard to create instances during render time that would be cleaned up by `useEffect`. Let's look at an example
where we try to create a Portal component.

```tsx
import * as React from "react";
import * as ReactDOM from "react-dom";

function Portal({ children }) {
  const domNode = React.useMemo(() => {
    const newElement = document.createElement("div");
    document.body.appendChild(newElement);
    console.log("create DOM node");
    return newElement;
  }, []);

  React.useEffect(() => {
    console.log("effect");
    return () => {
      console.log("dispose DOM node");
      domNode.remove();
    };
  }, [domNode]);

  console.log("render to portal");
  return ReactDOM.createPortal(children, domNode);
}
```

Let's look at the console output:

```
> create DOM node
> render to portal
> create DOM node
> render to portal
> effect
> dispose DOM node
> effect
```

The result: **Nothing is in the portal** 🚨🚨 why?

During the first `render to portal` the changes are not commited to DOM and in the end there is one empty
portal DOM node. Only after the second render are the DOM changes commited and our content rendered to the
**second** portal DOM node. However this triggers a simulated mount/unmount and our portal DOM
node is disposed 🙃

## useDispose

```tsx
import * as React from "react";
import * as ReactDOM from "react-dom";
import { useDisposable } from "use-disposable";

function Portal({ children }) {
  const domNode = React.useDisposable(() => {
    const newElement = document.createElement("div");
    document.body.appendChild(newElement);
    console.log("create DOM node");
    return [newElement, () => newElement.remove()];
  }, []);

  console.log("render to portal");
  return ReactDOM.createPortal(children, domNode);
}
```

The resulting console output:

```
> create DOM node
> render to portal
> render to portal
```

`useDispose` makes sure that even in strict mode that in both renders only one instance DOM node is created and used.

## useIsStrictMode

This is a hook that uses the React fiber to detect if the `StrictMode` component is in the tree. It powers `useDisposable` and
is also available from this package as a standalong utility.

## Limitations

⚠️ Calling `useDispose` twice in the same component will lead to unpredictable results, make sure this is only called once
per component, we are actively trying to find ways around this limitation.

## Contributing

This project welcomes contributions and suggestions. Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.opensource.microsoft.com.

When you submit a pull request, a CLA bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## Trademarks

This project may contain trademarks or logos for projects, products, or services. Authorized use of Microsoft
trademarks or logos is subject to and must follow
[Microsoft's Trademark & Brand Guidelines](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks/usage/general).
Use of Microsoft trademarks or logos in modified versions of this project must not cause confusion or imply Microsoft sponsorship.
Any use of third-party trademarks or logos are subject to those third-party's policies.
