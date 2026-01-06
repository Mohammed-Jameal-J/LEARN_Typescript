interface ApiResult<T> {
    success: boolean;
    data: T;
}

interface User {
    id: number;
    name: string;
}

const userResult: ApiResult<User> = {
    success: true,
    data: {
        id: 1,
        name: "John Doe"
    }
};

userResult.success; // true

const productResult: ApiResult<string[]> = {
    success: true,
    data: ["Laptop", "Mouse", "Keyboard"]
};

productResult.data; // ["Laptop", "Mouse", "Keyboard"]