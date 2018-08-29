import * as fromAction from '../actions/transaction.action';
import { Transaction } from '../../../models/transaction';

export interface TransactionState {
    entities: {
        [id: number]: Transaction
    };
    loaded: boolean;
    loading: boolean;
}

export const initialState: TransactionState = {
    entities: {},
    loaded: false,
    loading: false
}

export function reducer(state = initialState, action: fromAction.TransactionAction): TransactionState {
    switch (action.type) {

        case fromAction.LOAD_TRANSACTIONS: {
            return {
                ...state,
                loading: true
            }
        }

        case fromAction.LOAD_TRANSACTIONS_SUCCESS: {
            const transactions = action.payload;

            const entities = transactions.reduce((entities: { [id: number]: Transaction }, transaction: Transaction) => {
                return {
                    ...entities,
                    [transaction.id]: transaction,
                }
            }, {
                    ...state.entities
                }
            );

            return {
                ...state,
                loading: false,
                loaded: true,
                entities,
            }
        }

        case fromAction.LOAD_TRANSACTIONS_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false
            }
        }

        case fromAction.ADD_TRANSACTION_SUCCESS : {
            const transaction = action.payload;

            const entities = {
                ...state.entities,
                [transaction.id] : transaction
            }

            return {
                ...state,
                entities
            }
        }
        default:
            return state;
    }
}

export const getTransactionEntities = (state: TransactionState) => state.entities;
export const getTransactionsLoading = (state: TransactionState) => state.loading;
export const getTransactionsLoaded = (state: TransactionState) => state.loaded;