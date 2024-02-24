# REACT COMPONENT LIFECYCLE

- [Component Lifecycle Official](https://legacy.reactjs.org/docs/react-component.html#the-component-lifecycle)
- [Component Lifecycle Explanation | Free Code Camp](https://www.freecodecamp.org/news/react-component-lifecycle-methods/)
- [Component Lifecycle Explained | Youtube](https://youtu.be/m_mtV4YaI8c?si=L3DivU0rRo12TkUV)
- [Component Lifecycle Explained | Youtube - Hau Nguyen](https://youtu.be/MOms7uWpmT0?si=WluNVH3jUMOQIq-4)
- [Component Lifecycle Document - Hau Nguyen](https://drive.google.com/file/d/1RxqIGeOjld-l4yniBnwfgCX_L4m3Gnv7/view)

[Component Lifecycle Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
![Component Lifecycle Diagram](https://i2.wp.com/programmingwithmosh.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-31-at-1.44.28-PM.png?ssl=1)

## Notes

- Should use `PureComponent` because in PureComponent has shouldComponentUpdate to compare previous & current value
- By default, if use `Component`, `shouldComponentUpdate` always return `true`

```js
class App extends PureComponent {}
```

## Mounting

- `componentDidMount()`
- Được phép dùng.
- Khởi tạo dữ liệu cho component: gọi API, biến đổi dữ liệu, cập nhật state.
- Gửi tracking page view (GA, FacebookPixel, ...)

```js
class HomePage extends PureComponent {
  constructor(props) {
  super(props);
  this.state = {
    loading: true,
    productList: [],
  };
}

  async componentDidMount() {
    try {
    // Send GA page view tracking
    analytics.page('Home page');
    const productList = await productApi.getAll();
    this.setState({
      productList,
      loading: false,
    });
    } catch (error) {
      console.log('Failed to fetch product list: ', error);
      this.setState({loading: false});
    }
  }

  render() {
    const {loading, productList} = this.state;
    if (loading) return <Loader />;
    return <ProductList productList={productList}>
  }
}
```

## Updating

- `componentDidUpdate()`
- Cực kỳ hạn chế dùng
- ADVANCED Chỉ dùng nếu muốn handle update component khi click nút back mà trên URL có query params.

## Unmounting

- `componentWillUnmount()`
- Được phép dùng.
- Cleartimeout hoặc interval nếu có dùng.
- Reset dữ liệu trên redux nếu cần thiết.

```js
class Countdown extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentSecond: 0,
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        currentSecond: prevState.currentSecond - 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  render() {
    const { currentSecond } = this.state;
    return <p>{currentSecond}</p>;
  }
}
```

## Cách khắc phục lỗi can't setState() on unmounted component

```js
class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.isComponentMounted = false;
    this.state = {
      productList: [],
    };
  }

  async componentDidMount() {
    this.isComponentMounted = true;
    try {
      const productList = await productApi.fetchProductList();
      if (this.isComponentMounted) {
        this.setState({ productList });
      }
    } catch (error) {
      console.log("Failed to fetch data:", error);
    }
  }

  componentWillUnmount() {
    this.isComponentMounted = false;
  }

  render() {
    // Render something here ...
  }
}
```
