function echo<T>(value: T): T {
    return value;
}

echo<string>("Hello, TypeScript!").toUpperCase();
echo<number>(42).toFixed(2);