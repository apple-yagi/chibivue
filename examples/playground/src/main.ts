import { createApp, h, reactive } from "chibivue";

const MyComponent2 = {
  props: { someMessage: { type: String } },

  setup(props: any, { emit }: any) {
    return () =>
      h("div", {}, [
        h("p", {}, [`someMessage: ${props.someMessage}`]),
        h("button", { onClick: () => emit("click:change-message") }, [
          "change message",
        ]),
      ]);
  },
};

const MyComponent = {
  props: { someMessage: { type: String } },

  setup(props: any, { emit }: any) {
    const state = reactive({ message: "hello" });
    const changeMessage = () => {
      state.message += "!";
    };

    return () =>
      h("div", {}, [
        h("p", {}, [`someMessage: ${props.someMessage}`]),
        h("button", { onClick: () => emit("click:change-message") }, [
          "change message",
        ]),
        h(
          MyComponent2,
          {
            "some-message": state.message,
            "onClick:change-message": changeMessage,
          },
          []
        ),
      ]);
  },
};

const app = createApp({
  setup() {
    const state = reactive({ message: "hello" });
    const changeMessage = () => {
      state.message += "!";
    };

    return () =>
      h("div", { id: "my-app" }, [
        h(
          MyComponent,
          {
            "some-message": state.message,
            "onClick:change-message": changeMessage,
          },
          []
        ),
      ]);
  },
});

app.mount("#app");
