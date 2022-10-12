import useState from "../src/useState";

describe("vanillaUseState", () => {
  test("should get and set a counter's state", () => {
    const [counter, setCounter] = useState(0);

    function increment() {
      setCounter(counter() + 1);
    }

    function decrement() {
      setCounter(counter() - 1);
    }

    increment();
    increment();
    increment();
    expect(counter()).toEqual(3);

    decrement();
    decrement();
    expect(counter()).toEqual(1);
  });

  test("should get and set an object's state", () => {
    const [obj, setObj] = useState({
      name: "Ahad",
      gender: "Male",
      prefers: "JavaScript",
    });

    expect(obj()).toEqual({
      name: "Ahad",
      gender: "Male",
      prefers: "JavaScript",
    });

    setObj({
      name: "Alexis",
      gender: "Female",
      prefers: "Python",
    });

    expect(obj()).toEqual({
      name: "Alexis",
      gender: "Female",
      prefers: "Python",
    });
  });
});
