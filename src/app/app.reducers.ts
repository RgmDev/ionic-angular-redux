export interface CounterState {
    number: number;
}

export interface UserState {
    email: string;
    token: string;
}

export interface OptionsState {
    text: string;
    select: string;
    checkbox: {
        jonSnow: boolean,
        daenerysTargaryen: boolean,
        tyrionLannister: boolean
    };
    radio: string;
    datetime: string;
}

export interface AppState {
    counter: CounterState;
    user: UserState;
    options: OptionsState
}
  