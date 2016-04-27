let antiForgeryToken: string;

export function get(): string {
    return antiForgeryToken;
}

export function set(value: string) {
    antiForgeryToken = value;
}