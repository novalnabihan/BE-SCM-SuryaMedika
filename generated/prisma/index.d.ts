
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Warehouse
 * 
 */
export type Warehouse = $Result.DefaultSelection<Prisma.$WarehousePayload>
/**
 * Model Item
 * 
 */
export type Item = $Result.DefaultSelection<Prisma.$ItemPayload>
/**
 * Model ItemStock
 * 
 */
export type ItemStock = $Result.DefaultSelection<Prisma.$ItemStockPayload>
/**
 * Model ItemPriceHistory
 * 
 */
export type ItemPriceHistory = $Result.DefaultSelection<Prisma.$ItemPriceHistoryPayload>
/**
 * Model Invoice
 * 
 */
export type Invoice = $Result.DefaultSelection<Prisma.$InvoicePayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model StockFlow
 * 
 */
export type StockFlow = $Result.DefaultSelection<Prisma.$StockFlowPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  manajer: 'manajer',
  karyawan: 'karyawan'
};

export type Role = (typeof Role)[keyof typeof Role]


export const WarehouseType: {
  gudang: 'gudang',
  konsinyasi: 'konsinyasi'
};

export type WarehouseType = (typeof WarehouseType)[keyof typeof WarehouseType]


export const StockDirection: {
  in: 'in',
  out: 'out'
};

export type StockDirection = (typeof StockDirection)[keyof typeof StockDirection]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type WarehouseType = $Enums.WarehouseType

export const WarehouseType: typeof $Enums.WarehouseType

export type StockDirection = $Enums.StockDirection

export const StockDirection: typeof $Enums.StockDirection

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.warehouse`: Exposes CRUD operations for the **Warehouse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Warehouses
    * const warehouses = await prisma.warehouse.findMany()
    * ```
    */
  get warehouse(): Prisma.WarehouseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.item`: Exposes CRUD operations for the **Item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.item.findMany()
    * ```
    */
  get item(): Prisma.ItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.itemStock`: Exposes CRUD operations for the **ItemStock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemStocks
    * const itemStocks = await prisma.itemStock.findMany()
    * ```
    */
  get itemStock(): Prisma.ItemStockDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.itemPriceHistory`: Exposes CRUD operations for the **ItemPriceHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemPriceHistories
    * const itemPriceHistories = await prisma.itemPriceHistory.findMany()
    * ```
    */
  get itemPriceHistory(): Prisma.ItemPriceHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoice`: Exposes CRUD operations for the **Invoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoices
    * const invoices = await prisma.invoice.findMany()
    * ```
    */
  get invoice(): Prisma.InvoiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stockFlow`: Exposes CRUD operations for the **StockFlow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StockFlows
    * const stockFlows = await prisma.stockFlow.findMany()
    * ```
    */
  get stockFlow(): Prisma.StockFlowDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Warehouse: 'Warehouse',
    Item: 'Item',
    ItemStock: 'ItemStock',
    ItemPriceHistory: 'ItemPriceHistory',
    Invoice: 'Invoice',
    Transaction: 'Transaction',
    StockFlow: 'StockFlow'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "warehouse" | "item" | "itemStock" | "itemPriceHistory" | "invoice" | "transaction" | "stockFlow"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Warehouse: {
        payload: Prisma.$WarehousePayload<ExtArgs>
        fields: Prisma.WarehouseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WarehouseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WarehouseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          findFirst: {
            args: Prisma.WarehouseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WarehouseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          findMany: {
            args: Prisma.WarehouseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>[]
          }
          create: {
            args: Prisma.WarehouseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          createMany: {
            args: Prisma.WarehouseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WarehouseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>[]
          }
          delete: {
            args: Prisma.WarehouseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          update: {
            args: Prisma.WarehouseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          deleteMany: {
            args: Prisma.WarehouseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WarehouseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WarehouseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>[]
          }
          upsert: {
            args: Prisma.WarehouseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          aggregate: {
            args: Prisma.WarehouseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWarehouse>
          }
          groupBy: {
            args: Prisma.WarehouseGroupByArgs<ExtArgs>
            result: $Utils.Optional<WarehouseGroupByOutputType>[]
          }
          count: {
            args: Prisma.WarehouseCountArgs<ExtArgs>
            result: $Utils.Optional<WarehouseCountAggregateOutputType> | number
          }
        }
      }
      Item: {
        payload: Prisma.$ItemPayload<ExtArgs>
        fields: Prisma.ItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findFirst: {
            args: Prisma.ItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findMany: {
            args: Prisma.ItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          create: {
            args: Prisma.ItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          createMany: {
            args: Prisma.ItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          delete: {
            args: Prisma.ItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          update: {
            args: Prisma.ItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          deleteMany: {
            args: Prisma.ItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          upsert: {
            args: Prisma.ItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          aggregate: {
            args: Prisma.ItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItem>
          }
          groupBy: {
            args: Prisma.ItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemCountArgs<ExtArgs>
            result: $Utils.Optional<ItemCountAggregateOutputType> | number
          }
        }
      }
      ItemStock: {
        payload: Prisma.$ItemStockPayload<ExtArgs>
        fields: Prisma.ItemStockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemStockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemStockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemStockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemStockPayload>
          }
          findFirst: {
            args: Prisma.ItemStockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemStockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemStockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemStockPayload>
          }
          findMany: {
            args: Prisma.ItemStockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemStockPayload>[]
          }
          create: {
            args: Prisma.ItemStockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemStockPayload>
          }
          createMany: {
            args: Prisma.ItemStockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemStockCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemStockPayload>[]
          }
          delete: {
            args: Prisma.ItemStockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemStockPayload>
          }
          update: {
            args: Prisma.ItemStockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemStockPayload>
          }
          deleteMany: {
            args: Prisma.ItemStockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemStockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemStockUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemStockPayload>[]
          }
          upsert: {
            args: Prisma.ItemStockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemStockPayload>
          }
          aggregate: {
            args: Prisma.ItemStockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemStock>
          }
          groupBy: {
            args: Prisma.ItemStockGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemStockGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemStockCountArgs<ExtArgs>
            result: $Utils.Optional<ItemStockCountAggregateOutputType> | number
          }
        }
      }
      ItemPriceHistory: {
        payload: Prisma.$ItemPriceHistoryPayload<ExtArgs>
        fields: Prisma.ItemPriceHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemPriceHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPriceHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemPriceHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPriceHistoryPayload>
          }
          findFirst: {
            args: Prisma.ItemPriceHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPriceHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemPriceHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPriceHistoryPayload>
          }
          findMany: {
            args: Prisma.ItemPriceHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPriceHistoryPayload>[]
          }
          create: {
            args: Prisma.ItemPriceHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPriceHistoryPayload>
          }
          createMany: {
            args: Prisma.ItemPriceHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemPriceHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPriceHistoryPayload>[]
          }
          delete: {
            args: Prisma.ItemPriceHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPriceHistoryPayload>
          }
          update: {
            args: Prisma.ItemPriceHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPriceHistoryPayload>
          }
          deleteMany: {
            args: Prisma.ItemPriceHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemPriceHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemPriceHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPriceHistoryPayload>[]
          }
          upsert: {
            args: Prisma.ItemPriceHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPriceHistoryPayload>
          }
          aggregate: {
            args: Prisma.ItemPriceHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemPriceHistory>
          }
          groupBy: {
            args: Prisma.ItemPriceHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemPriceHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemPriceHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<ItemPriceHistoryCountAggregateOutputType> | number
          }
        }
      }
      Invoice: {
        payload: Prisma.$InvoicePayload<ExtArgs>
        fields: Prisma.InvoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findFirst: {
            args: Prisma.InvoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findMany: {
            args: Prisma.InvoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          create: {
            args: Prisma.InvoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          createMany: {
            args: Prisma.InvoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvoiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          delete: {
            args: Prisma.InvoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          update: {
            args: Prisma.InvoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          deleteMany: {
            args: Prisma.InvoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvoiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          upsert: {
            args: Prisma.InvoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          aggregate: {
            args: Prisma.InvoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoice>
          }
          groupBy: {
            args: Prisma.InvoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvoiceCountArgs<ExtArgs>
            result: $Utils.Optional<InvoiceCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      StockFlow: {
        payload: Prisma.$StockFlowPayload<ExtArgs>
        fields: Prisma.StockFlowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StockFlowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockFlowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StockFlowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockFlowPayload>
          }
          findFirst: {
            args: Prisma.StockFlowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockFlowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StockFlowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockFlowPayload>
          }
          findMany: {
            args: Prisma.StockFlowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockFlowPayload>[]
          }
          create: {
            args: Prisma.StockFlowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockFlowPayload>
          }
          createMany: {
            args: Prisma.StockFlowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StockFlowCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockFlowPayload>[]
          }
          delete: {
            args: Prisma.StockFlowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockFlowPayload>
          }
          update: {
            args: Prisma.StockFlowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockFlowPayload>
          }
          deleteMany: {
            args: Prisma.StockFlowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StockFlowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StockFlowUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockFlowPayload>[]
          }
          upsert: {
            args: Prisma.StockFlowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockFlowPayload>
          }
          aggregate: {
            args: Prisma.StockFlowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStockFlow>
          }
          groupBy: {
            args: Prisma.StockFlowGroupByArgs<ExtArgs>
            result: $Utils.Optional<StockFlowGroupByOutputType>[]
          }
          count: {
            args: Prisma.StockFlowCountArgs<ExtArgs>
            result: $Utils.Optional<StockFlowCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    warehouse?: WarehouseOmit
    item?: ItemOmit
    itemStock?: ItemStockOmit
    itemPriceHistory?: ItemPriceHistoryOmit
    invoice?: InvoiceOmit
    transaction?: TransactionOmit
    stockFlow?: StockFlowOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    invoices: number
    transactions: number
    priceHistories: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoices?: boolean | UserCountOutputTypeCountInvoicesArgs
    transactions?: boolean | UserCountOutputTypeCountTransactionsArgs
    priceHistories?: boolean | UserCountOutputTypeCountPriceHistoriesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPriceHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemPriceHistoryWhereInput
  }


  /**
   * Count Type WarehouseCountOutputType
   */

  export type WarehouseCountOutputType = {
    itemStocks: number
    transactions: number
    stockFlows: number
  }

  export type WarehouseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itemStocks?: boolean | WarehouseCountOutputTypeCountItemStocksArgs
    transactions?: boolean | WarehouseCountOutputTypeCountTransactionsArgs
    stockFlows?: boolean | WarehouseCountOutputTypeCountStockFlowsArgs
  }

  // Custom InputTypes
  /**
   * WarehouseCountOutputType without action
   */
  export type WarehouseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseCountOutputType
     */
    select?: WarehouseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WarehouseCountOutputType without action
   */
  export type WarehouseCountOutputTypeCountItemStocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemStockWhereInput
  }

  /**
   * WarehouseCountOutputType without action
   */
  export type WarehouseCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * WarehouseCountOutputType without action
   */
  export type WarehouseCountOutputTypeCountStockFlowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockFlowWhereInput
  }


  /**
   * Count Type ItemCountOutputType
   */

  export type ItemCountOutputType = {
    itemStocks: number
    priceHistories: number
    transactions: number
    stockFlows: number
  }

  export type ItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itemStocks?: boolean | ItemCountOutputTypeCountItemStocksArgs
    priceHistories?: boolean | ItemCountOutputTypeCountPriceHistoriesArgs
    transactions?: boolean | ItemCountOutputTypeCountTransactionsArgs
    stockFlows?: boolean | ItemCountOutputTypeCountStockFlowsArgs
  }

  // Custom InputTypes
  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCountOutputType
     */
    select?: ItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountItemStocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemStockWhereInput
  }

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountPriceHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemPriceHistoryWhereInput
  }

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountStockFlowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockFlowWhereInput
  }


  /**
   * Count Type InvoiceCountOutputType
   */

  export type InvoiceCountOutputType = {
    transactions: number
  }

  export type InvoiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | InvoiceCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * InvoiceCountOutputType without action
   */
  export type InvoiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceCountOutputType
     */
    select?: InvoiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InvoiceCountOutputType without action
   */
  export type InvoiceCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type TransactionCountOutputType
   */

  export type TransactionCountOutputType = {
    stockFlows: number
  }

  export type TransactionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stockFlows?: boolean | TransactionCountOutputTypeCountStockFlowsArgs
  }

  // Custom InputTypes
  /**
   * TransactionCountOutputType without action
   */
  export type TransactionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionCountOutputType
     */
    select?: TransactionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TransactionCountOutputType without action
   */
  export type TransactionCountOutputTypeCountStockFlowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockFlowWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    username: string | null
    email: string | null
    phone: string | null
    role: $Enums.Role | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    username: string | null
    email: string | null
    phone: string | null
    role: $Enums.Role | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    fullName: number
    username: number
    email: number
    phone: number
    role: number
    password: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    fullName?: true
    username?: true
    email?: true
    phone?: true
    role?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    fullName?: true
    username?: true
    email?: true
    phone?: true
    role?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    fullName?: true
    username?: true
    email?: true
    phone?: true
    role?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    fullName: string
    username: string
    email: string
    phone: string
    role: $Enums.Role
    password: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    username?: boolean
    email?: boolean
    phone?: boolean
    role?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    invoices?: boolean | User$invoicesArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    priceHistories?: boolean | User$priceHistoriesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    username?: boolean
    email?: boolean
    phone?: boolean
    role?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    username?: boolean
    email?: boolean
    phone?: boolean
    role?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    fullName?: boolean
    username?: boolean
    email?: boolean
    phone?: boolean
    role?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "username" | "email" | "phone" | "role" | "password" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoices?: boolean | User$invoicesArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    priceHistories?: boolean | User$priceHistoriesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      invoices: Prisma.$InvoicePayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      priceHistories: Prisma.$ItemPriceHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      username: string
      email: string
      phone: string
      role: $Enums.Role
      password: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invoices<T extends User$invoicesArgs<ExtArgs> = {}>(args?: Subset<T, User$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends User$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    priceHistories<T extends User$priceHistoriesArgs<ExtArgs> = {}>(args?: Subset<T, User$priceHistoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPriceHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.invoices
   */
  export type User$invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    cursor?: InvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * User.transactions
   */
  export type User$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * User.priceHistories
   */
  export type User$priceHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPriceHistory
     */
    select?: ItemPriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPriceHistory
     */
    omit?: ItemPriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPriceHistoryInclude<ExtArgs> | null
    where?: ItemPriceHistoryWhereInput
    orderBy?: ItemPriceHistoryOrderByWithRelationInput | ItemPriceHistoryOrderByWithRelationInput[]
    cursor?: ItemPriceHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemPriceHistoryScalarFieldEnum | ItemPriceHistoryScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Warehouse
   */

  export type AggregateWarehouse = {
    _count: WarehouseCountAggregateOutputType | null
    _min: WarehouseMinAggregateOutputType | null
    _max: WarehouseMaxAggregateOutputType | null
  }

  export type WarehouseMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    type: $Enums.WarehouseType | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type WarehouseMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    type: $Enums.WarehouseType | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type WarehouseCountAggregateOutputType = {
    id: number
    name: number
    address: number
    type: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type WarehouseMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type WarehouseMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type WarehouseCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type WarehouseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Warehouse to aggregate.
     */
    where?: WarehouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehouseOrderByWithRelationInput | WarehouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WarehouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Warehouses
    **/
    _count?: true | WarehouseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WarehouseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WarehouseMaxAggregateInputType
  }

  export type GetWarehouseAggregateType<T extends WarehouseAggregateArgs> = {
        [P in keyof T & keyof AggregateWarehouse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWarehouse[P]>
      : GetScalarType<T[P], AggregateWarehouse[P]>
  }




  export type WarehouseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WarehouseWhereInput
    orderBy?: WarehouseOrderByWithAggregationInput | WarehouseOrderByWithAggregationInput[]
    by: WarehouseScalarFieldEnum[] | WarehouseScalarFieldEnum
    having?: WarehouseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WarehouseCountAggregateInputType | true
    _min?: WarehouseMinAggregateInputType
    _max?: WarehouseMaxAggregateInputType
  }

  export type WarehouseGroupByOutputType = {
    id: string
    name: string
    address: string
    type: $Enums.WarehouseType
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: WarehouseCountAggregateOutputType | null
    _min: WarehouseMinAggregateOutputType | null
    _max: WarehouseMaxAggregateOutputType | null
  }

  type GetWarehouseGroupByPayload<T extends WarehouseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WarehouseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WarehouseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WarehouseGroupByOutputType[P]>
            : GetScalarType<T[P], WarehouseGroupByOutputType[P]>
        }
      >
    >


  export type WarehouseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    itemStocks?: boolean | Warehouse$itemStocksArgs<ExtArgs>
    transactions?: boolean | Warehouse$transactionsArgs<ExtArgs>
    stockFlows?: boolean | Warehouse$stockFlowsArgs<ExtArgs>
    _count?: boolean | WarehouseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["warehouse"]>

  export type WarehouseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["warehouse"]>

  export type WarehouseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["warehouse"]>

  export type WarehouseSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type WarehouseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "type" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["warehouse"]>
  export type WarehouseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itemStocks?: boolean | Warehouse$itemStocksArgs<ExtArgs>
    transactions?: boolean | Warehouse$transactionsArgs<ExtArgs>
    stockFlows?: boolean | Warehouse$stockFlowsArgs<ExtArgs>
    _count?: boolean | WarehouseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WarehouseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WarehouseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WarehousePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Warehouse"
    objects: {
      itemStocks: Prisma.$ItemStockPayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      stockFlows: Prisma.$StockFlowPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      address: string
      type: $Enums.WarehouseType
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["warehouse"]>
    composites: {}
  }

  type WarehouseGetPayload<S extends boolean | null | undefined | WarehouseDefaultArgs> = $Result.GetResult<Prisma.$WarehousePayload, S>

  type WarehouseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WarehouseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WarehouseCountAggregateInputType | true
    }

  export interface WarehouseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Warehouse'], meta: { name: 'Warehouse' } }
    /**
     * Find zero or one Warehouse that matches the filter.
     * @param {WarehouseFindUniqueArgs} args - Arguments to find a Warehouse
     * @example
     * // Get one Warehouse
     * const warehouse = await prisma.warehouse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WarehouseFindUniqueArgs>(args: SelectSubset<T, WarehouseFindUniqueArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Warehouse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WarehouseFindUniqueOrThrowArgs} args - Arguments to find a Warehouse
     * @example
     * // Get one Warehouse
     * const warehouse = await prisma.warehouse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WarehouseFindUniqueOrThrowArgs>(args: SelectSubset<T, WarehouseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Warehouse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseFindFirstArgs} args - Arguments to find a Warehouse
     * @example
     * // Get one Warehouse
     * const warehouse = await prisma.warehouse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WarehouseFindFirstArgs>(args?: SelectSubset<T, WarehouseFindFirstArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Warehouse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseFindFirstOrThrowArgs} args - Arguments to find a Warehouse
     * @example
     * // Get one Warehouse
     * const warehouse = await prisma.warehouse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WarehouseFindFirstOrThrowArgs>(args?: SelectSubset<T, WarehouseFindFirstOrThrowArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Warehouses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Warehouses
     * const warehouses = await prisma.warehouse.findMany()
     * 
     * // Get first 10 Warehouses
     * const warehouses = await prisma.warehouse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const warehouseWithIdOnly = await prisma.warehouse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WarehouseFindManyArgs>(args?: SelectSubset<T, WarehouseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Warehouse.
     * @param {WarehouseCreateArgs} args - Arguments to create a Warehouse.
     * @example
     * // Create one Warehouse
     * const Warehouse = await prisma.warehouse.create({
     *   data: {
     *     // ... data to create a Warehouse
     *   }
     * })
     * 
     */
    create<T extends WarehouseCreateArgs>(args: SelectSubset<T, WarehouseCreateArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Warehouses.
     * @param {WarehouseCreateManyArgs} args - Arguments to create many Warehouses.
     * @example
     * // Create many Warehouses
     * const warehouse = await prisma.warehouse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WarehouseCreateManyArgs>(args?: SelectSubset<T, WarehouseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Warehouses and returns the data saved in the database.
     * @param {WarehouseCreateManyAndReturnArgs} args - Arguments to create many Warehouses.
     * @example
     * // Create many Warehouses
     * const warehouse = await prisma.warehouse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Warehouses and only return the `id`
     * const warehouseWithIdOnly = await prisma.warehouse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WarehouseCreateManyAndReturnArgs>(args?: SelectSubset<T, WarehouseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Warehouse.
     * @param {WarehouseDeleteArgs} args - Arguments to delete one Warehouse.
     * @example
     * // Delete one Warehouse
     * const Warehouse = await prisma.warehouse.delete({
     *   where: {
     *     // ... filter to delete one Warehouse
     *   }
     * })
     * 
     */
    delete<T extends WarehouseDeleteArgs>(args: SelectSubset<T, WarehouseDeleteArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Warehouse.
     * @param {WarehouseUpdateArgs} args - Arguments to update one Warehouse.
     * @example
     * // Update one Warehouse
     * const warehouse = await prisma.warehouse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WarehouseUpdateArgs>(args: SelectSubset<T, WarehouseUpdateArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Warehouses.
     * @param {WarehouseDeleteManyArgs} args - Arguments to filter Warehouses to delete.
     * @example
     * // Delete a few Warehouses
     * const { count } = await prisma.warehouse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WarehouseDeleteManyArgs>(args?: SelectSubset<T, WarehouseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Warehouses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Warehouses
     * const warehouse = await prisma.warehouse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WarehouseUpdateManyArgs>(args: SelectSubset<T, WarehouseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Warehouses and returns the data updated in the database.
     * @param {WarehouseUpdateManyAndReturnArgs} args - Arguments to update many Warehouses.
     * @example
     * // Update many Warehouses
     * const warehouse = await prisma.warehouse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Warehouses and only return the `id`
     * const warehouseWithIdOnly = await prisma.warehouse.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WarehouseUpdateManyAndReturnArgs>(args: SelectSubset<T, WarehouseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Warehouse.
     * @param {WarehouseUpsertArgs} args - Arguments to update or create a Warehouse.
     * @example
     * // Update or create a Warehouse
     * const warehouse = await prisma.warehouse.upsert({
     *   create: {
     *     // ... data to create a Warehouse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Warehouse we want to update
     *   }
     * })
     */
    upsert<T extends WarehouseUpsertArgs>(args: SelectSubset<T, WarehouseUpsertArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Warehouses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseCountArgs} args - Arguments to filter Warehouses to count.
     * @example
     * // Count the number of Warehouses
     * const count = await prisma.warehouse.count({
     *   where: {
     *     // ... the filter for the Warehouses we want to count
     *   }
     * })
    **/
    count<T extends WarehouseCountArgs>(
      args?: Subset<T, WarehouseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WarehouseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Warehouse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WarehouseAggregateArgs>(args: Subset<T, WarehouseAggregateArgs>): Prisma.PrismaPromise<GetWarehouseAggregateType<T>>

    /**
     * Group by Warehouse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WarehouseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WarehouseGroupByArgs['orderBy'] }
        : { orderBy?: WarehouseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WarehouseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWarehouseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Warehouse model
   */
  readonly fields: WarehouseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Warehouse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WarehouseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    itemStocks<T extends Warehouse$itemStocksArgs<ExtArgs> = {}>(args?: Subset<T, Warehouse$itemStocksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemStockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends Warehouse$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Warehouse$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stockFlows<T extends Warehouse$stockFlowsArgs<ExtArgs> = {}>(args?: Subset<T, Warehouse$stockFlowsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockFlowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Warehouse model
   */
  interface WarehouseFieldRefs {
    readonly id: FieldRef<"Warehouse", 'String'>
    readonly name: FieldRef<"Warehouse", 'String'>
    readonly address: FieldRef<"Warehouse", 'String'>
    readonly type: FieldRef<"Warehouse", 'WarehouseType'>
    readonly createdAt: FieldRef<"Warehouse", 'DateTime'>
    readonly updatedAt: FieldRef<"Warehouse", 'DateTime'>
    readonly deletedAt: FieldRef<"Warehouse", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Warehouse findUnique
   */
  export type WarehouseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouse to fetch.
     */
    where: WarehouseWhereUniqueInput
  }

  /**
   * Warehouse findUniqueOrThrow
   */
  export type WarehouseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouse to fetch.
     */
    where: WarehouseWhereUniqueInput
  }

  /**
   * Warehouse findFirst
   */
  export type WarehouseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouse to fetch.
     */
    where?: WarehouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehouseOrderByWithRelationInput | WarehouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Warehouses.
     */
    cursor?: WarehouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Warehouses.
     */
    distinct?: WarehouseScalarFieldEnum | WarehouseScalarFieldEnum[]
  }

  /**
   * Warehouse findFirstOrThrow
   */
  export type WarehouseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouse to fetch.
     */
    where?: WarehouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehouseOrderByWithRelationInput | WarehouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Warehouses.
     */
    cursor?: WarehouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Warehouses.
     */
    distinct?: WarehouseScalarFieldEnum | WarehouseScalarFieldEnum[]
  }

  /**
   * Warehouse findMany
   */
  export type WarehouseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouses to fetch.
     */
    where?: WarehouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehouseOrderByWithRelationInput | WarehouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Warehouses.
     */
    cursor?: WarehouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    distinct?: WarehouseScalarFieldEnum | WarehouseScalarFieldEnum[]
  }

  /**
   * Warehouse create
   */
  export type WarehouseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * The data needed to create a Warehouse.
     */
    data: XOR<WarehouseCreateInput, WarehouseUncheckedCreateInput>
  }

  /**
   * Warehouse createMany
   */
  export type WarehouseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Warehouses.
     */
    data: WarehouseCreateManyInput | WarehouseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Warehouse createManyAndReturn
   */
  export type WarehouseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * The data used to create many Warehouses.
     */
    data: WarehouseCreateManyInput | WarehouseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Warehouse update
   */
  export type WarehouseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * The data needed to update a Warehouse.
     */
    data: XOR<WarehouseUpdateInput, WarehouseUncheckedUpdateInput>
    /**
     * Choose, which Warehouse to update.
     */
    where: WarehouseWhereUniqueInput
  }

  /**
   * Warehouse updateMany
   */
  export type WarehouseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Warehouses.
     */
    data: XOR<WarehouseUpdateManyMutationInput, WarehouseUncheckedUpdateManyInput>
    /**
     * Filter which Warehouses to update
     */
    where?: WarehouseWhereInput
    /**
     * Limit how many Warehouses to update.
     */
    limit?: number
  }

  /**
   * Warehouse updateManyAndReturn
   */
  export type WarehouseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * The data used to update Warehouses.
     */
    data: XOR<WarehouseUpdateManyMutationInput, WarehouseUncheckedUpdateManyInput>
    /**
     * Filter which Warehouses to update
     */
    where?: WarehouseWhereInput
    /**
     * Limit how many Warehouses to update.
     */
    limit?: number
  }

  /**
   * Warehouse upsert
   */
  export type WarehouseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * The filter to search for the Warehouse to update in case it exists.
     */
    where: WarehouseWhereUniqueInput
    /**
     * In case the Warehouse found by the `where` argument doesn't exist, create a new Warehouse with this data.
     */
    create: XOR<WarehouseCreateInput, WarehouseUncheckedCreateInput>
    /**
     * In case the Warehouse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WarehouseUpdateInput, WarehouseUncheckedUpdateInput>
  }

  /**
   * Warehouse delete
   */
  export type WarehouseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter which Warehouse to delete.
     */
    where: WarehouseWhereUniqueInput
  }

  /**
   * Warehouse deleteMany
   */
  export type WarehouseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Warehouses to delete
     */
    where?: WarehouseWhereInput
    /**
     * Limit how many Warehouses to delete.
     */
    limit?: number
  }

  /**
   * Warehouse.itemStocks
   */
  export type Warehouse$itemStocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemStock
     */
    select?: ItemStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemStock
     */
    omit?: ItemStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemStockInclude<ExtArgs> | null
    where?: ItemStockWhereInput
    orderBy?: ItemStockOrderByWithRelationInput | ItemStockOrderByWithRelationInput[]
    cursor?: ItemStockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemStockScalarFieldEnum | ItemStockScalarFieldEnum[]
  }

  /**
   * Warehouse.transactions
   */
  export type Warehouse$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Warehouse.stockFlows
   */
  export type Warehouse$stockFlowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockFlow
     */
    select?: StockFlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockFlow
     */
    omit?: StockFlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockFlowInclude<ExtArgs> | null
    where?: StockFlowWhereInput
    orderBy?: StockFlowOrderByWithRelationInput | StockFlowOrderByWithRelationInput[]
    cursor?: StockFlowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockFlowScalarFieldEnum | StockFlowScalarFieldEnum[]
  }

  /**
   * Warehouse without action
   */
  export type WarehouseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
  }


  /**
   * Model Item
   */

  export type AggregateItem = {
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  export type ItemAvgAggregateOutputType = {
    currentPrice: number | null
  }

  export type ItemSumAggregateOutputType = {
    currentPrice: number | null
  }

  export type ItemMinAggregateOutputType = {
    id: string | null
    name: string | null
    currentPrice: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ItemMaxAggregateOutputType = {
    id: string | null
    name: string | null
    currentPrice: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ItemCountAggregateOutputType = {
    id: number
    name: number
    currentPrice: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type ItemAvgAggregateInputType = {
    currentPrice?: true
  }

  export type ItemSumAggregateInputType = {
    currentPrice?: true
  }

  export type ItemMinAggregateInputType = {
    id?: true
    name?: true
    currentPrice?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ItemMaxAggregateInputType = {
    id?: true
    name?: true
    currentPrice?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ItemCountAggregateInputType = {
    id?: true
    name?: true
    currentPrice?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type ItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Item to aggregate.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Items
    **/
    _count?: true | ItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemMaxAggregateInputType
  }

  export type GetItemAggregateType<T extends ItemAggregateArgs> = {
        [P in keyof T & keyof AggregateItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem[P]>
      : GetScalarType<T[P], AggregateItem[P]>
  }




  export type ItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithAggregationInput | ItemOrderByWithAggregationInput[]
    by: ItemScalarFieldEnum[] | ItemScalarFieldEnum
    having?: ItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCountAggregateInputType | true
    _avg?: ItemAvgAggregateInputType
    _sum?: ItemSumAggregateInputType
    _min?: ItemMinAggregateInputType
    _max?: ItemMaxAggregateInputType
  }

  export type ItemGroupByOutputType = {
    id: string
    name: string
    currentPrice: number
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  type GetItemGroupByPayload<T extends ItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemGroupByOutputType[P]>
            : GetScalarType<T[P], ItemGroupByOutputType[P]>
        }
      >
    >


  export type ItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    currentPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    itemStocks?: boolean | Item$itemStocksArgs<ExtArgs>
    priceHistories?: boolean | Item$priceHistoriesArgs<ExtArgs>
    transactions?: boolean | Item$transactionsArgs<ExtArgs>
    stockFlows?: boolean | Item$stockFlowsArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    currentPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["item"]>

  export type ItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    currentPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["item"]>

  export type ItemSelectScalar = {
    id?: boolean
    name?: boolean
    currentPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type ItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "currentPrice" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["item"]>
  export type ItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itemStocks?: boolean | Item$itemStocksArgs<ExtArgs>
    priceHistories?: boolean | Item$priceHistoriesArgs<ExtArgs>
    transactions?: boolean | Item$transactionsArgs<ExtArgs>
    stockFlows?: boolean | Item$stockFlowsArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Item"
    objects: {
      itemStocks: Prisma.$ItemStockPayload<ExtArgs>[]
      priceHistories: Prisma.$ItemPriceHistoryPayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      stockFlows: Prisma.$StockFlowPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      currentPrice: number
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["item"]>
    composites: {}
  }

  type ItemGetPayload<S extends boolean | null | undefined | ItemDefaultArgs> = $Result.GetResult<Prisma.$ItemPayload, S>

  type ItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemCountAggregateInputType | true
    }

  export interface ItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Item'], meta: { name: 'Item' } }
    /**
     * Find zero or one Item that matches the filter.
     * @param {ItemFindUniqueArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemFindUniqueArgs>(args: SelectSubset<T, ItemFindUniqueArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Item that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemFindUniqueOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemFindFirstArgs>(args?: SelectSubset<T, ItemFindFirstArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.item.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.item.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemWithIdOnly = await prisma.item.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemFindManyArgs>(args?: SelectSubset<T, ItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Item.
     * @param {ItemCreateArgs} args - Arguments to create a Item.
     * @example
     * // Create one Item
     * const Item = await prisma.item.create({
     *   data: {
     *     // ... data to create a Item
     *   }
     * })
     * 
     */
    create<T extends ItemCreateArgs>(args: SelectSubset<T, ItemCreateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Items.
     * @param {ItemCreateManyArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemCreateManyArgs>(args?: SelectSubset<T, ItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Items and returns the data saved in the database.
     * @param {ItemCreateManyAndReturnArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Item.
     * @param {ItemDeleteArgs} args - Arguments to delete one Item.
     * @example
     * // Delete one Item
     * const Item = await prisma.item.delete({
     *   where: {
     *     // ... filter to delete one Item
     *   }
     * })
     * 
     */
    delete<T extends ItemDeleteArgs>(args: SelectSubset<T, ItemDeleteArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Item.
     * @param {ItemUpdateArgs} args - Arguments to update one Item.
     * @example
     * // Update one Item
     * const item = await prisma.item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemUpdateArgs>(args: SelectSubset<T, ItemUpdateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Items.
     * @param {ItemDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemDeleteManyArgs>(args?: SelectSubset<T, ItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemUpdateManyArgs>(args: SelectSubset<T, ItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items and returns the data updated in the database.
     * @param {ItemUpdateManyAndReturnArgs} args - Arguments to update many Items.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Item.
     * @param {ItemUpsertArgs} args - Arguments to update or create a Item.
     * @example
     * // Update or create a Item
     * const item = await prisma.item.upsert({
     *   create: {
     *     // ... data to create a Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item we want to update
     *   }
     * })
     */
    upsert<T extends ItemUpsertArgs>(args: SelectSubset<T, ItemUpsertArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.item.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends ItemCountArgs>(
      args?: Subset<T, ItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemAggregateArgs>(args: Subset<T, ItemAggregateArgs>): Prisma.PrismaPromise<GetItemAggregateType<T>>

    /**
     * Group by Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemGroupByArgs['orderBy'] }
        : { orderBy?: ItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Item model
   */
  readonly fields: ItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    itemStocks<T extends Item$itemStocksArgs<ExtArgs> = {}>(args?: Subset<T, Item$itemStocksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemStockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    priceHistories<T extends Item$priceHistoriesArgs<ExtArgs> = {}>(args?: Subset<T, Item$priceHistoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPriceHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends Item$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Item$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stockFlows<T extends Item$stockFlowsArgs<ExtArgs> = {}>(args?: Subset<T, Item$stockFlowsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockFlowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Item model
   */
  interface ItemFieldRefs {
    readonly id: FieldRef<"Item", 'String'>
    readonly name: FieldRef<"Item", 'String'>
    readonly currentPrice: FieldRef<"Item", 'Float'>
    readonly createdAt: FieldRef<"Item", 'DateTime'>
    readonly updatedAt: FieldRef<"Item", 'DateTime'>
    readonly deletedAt: FieldRef<"Item", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Item findUnique
   */
  export type ItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findUniqueOrThrow
   */
  export type ItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findFirst
   */
  export type ItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findFirstOrThrow
   */
  export type ItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findMany
   */
  export type ItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item create
   */
  export type ItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to create a Item.
     */
    data: XOR<ItemCreateInput, ItemUncheckedCreateInput>
  }

  /**
   * Item createMany
   */
  export type ItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Item createManyAndReturn
   */
  export type ItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Item update
   */
  export type ItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to update a Item.
     */
    data: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
    /**
     * Choose, which Item to update.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item updateMany
   */
  export type ItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
  }

  /**
   * Item updateManyAndReturn
   */
  export type ItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
  }

  /**
   * Item upsert
   */
  export type ItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The filter to search for the Item to update in case it exists.
     */
    where: ItemWhereUniqueInput
    /**
     * In case the Item found by the `where` argument doesn't exist, create a new Item with this data.
     */
    create: XOR<ItemCreateInput, ItemUncheckedCreateInput>
    /**
     * In case the Item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
  }

  /**
   * Item delete
   */
  export type ItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter which Item to delete.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item deleteMany
   */
  export type ItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Items to delete
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to delete.
     */
    limit?: number
  }

  /**
   * Item.itemStocks
   */
  export type Item$itemStocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemStock
     */
    select?: ItemStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemStock
     */
    omit?: ItemStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemStockInclude<ExtArgs> | null
    where?: ItemStockWhereInput
    orderBy?: ItemStockOrderByWithRelationInput | ItemStockOrderByWithRelationInput[]
    cursor?: ItemStockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemStockScalarFieldEnum | ItemStockScalarFieldEnum[]
  }

  /**
   * Item.priceHistories
   */
  export type Item$priceHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPriceHistory
     */
    select?: ItemPriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPriceHistory
     */
    omit?: ItemPriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPriceHistoryInclude<ExtArgs> | null
    where?: ItemPriceHistoryWhereInput
    orderBy?: ItemPriceHistoryOrderByWithRelationInput | ItemPriceHistoryOrderByWithRelationInput[]
    cursor?: ItemPriceHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemPriceHistoryScalarFieldEnum | ItemPriceHistoryScalarFieldEnum[]
  }

  /**
   * Item.transactions
   */
  export type Item$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Item.stockFlows
   */
  export type Item$stockFlowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockFlow
     */
    select?: StockFlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockFlow
     */
    omit?: StockFlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockFlowInclude<ExtArgs> | null
    where?: StockFlowWhereInput
    orderBy?: StockFlowOrderByWithRelationInput | StockFlowOrderByWithRelationInput[]
    cursor?: StockFlowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockFlowScalarFieldEnum | StockFlowScalarFieldEnum[]
  }

  /**
   * Item without action
   */
  export type ItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
  }


  /**
   * Model ItemStock
   */

  export type AggregateItemStock = {
    _count: ItemStockCountAggregateOutputType | null
    _avg: ItemStockAvgAggregateOutputType | null
    _sum: ItemStockSumAggregateOutputType | null
    _min: ItemStockMinAggregateOutputType | null
    _max: ItemStockMaxAggregateOutputType | null
  }

  export type ItemStockAvgAggregateOutputType = {
    stockQty: number | null
  }

  export type ItemStockSumAggregateOutputType = {
    stockQty: number | null
  }

  export type ItemStockMinAggregateOutputType = {
    id: string | null
    itemId: string | null
    warehouseId: string | null
    stockQty: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItemStockMaxAggregateOutputType = {
    id: string | null
    itemId: string | null
    warehouseId: string | null
    stockQty: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItemStockCountAggregateOutputType = {
    id: number
    itemId: number
    warehouseId: number
    stockQty: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ItemStockAvgAggregateInputType = {
    stockQty?: true
  }

  export type ItemStockSumAggregateInputType = {
    stockQty?: true
  }

  export type ItemStockMinAggregateInputType = {
    id?: true
    itemId?: true
    warehouseId?: true
    stockQty?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItemStockMaxAggregateInputType = {
    id?: true
    itemId?: true
    warehouseId?: true
    stockQty?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItemStockCountAggregateInputType = {
    id?: true
    itemId?: true
    warehouseId?: true
    stockQty?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ItemStockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemStock to aggregate.
     */
    where?: ItemStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemStocks to fetch.
     */
    orderBy?: ItemStockOrderByWithRelationInput | ItemStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemStocks
    **/
    _count?: true | ItemStockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemStockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemStockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemStockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemStockMaxAggregateInputType
  }

  export type GetItemStockAggregateType<T extends ItemStockAggregateArgs> = {
        [P in keyof T & keyof AggregateItemStock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemStock[P]>
      : GetScalarType<T[P], AggregateItemStock[P]>
  }




  export type ItemStockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemStockWhereInput
    orderBy?: ItemStockOrderByWithAggregationInput | ItemStockOrderByWithAggregationInput[]
    by: ItemStockScalarFieldEnum[] | ItemStockScalarFieldEnum
    having?: ItemStockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemStockCountAggregateInputType | true
    _avg?: ItemStockAvgAggregateInputType
    _sum?: ItemStockSumAggregateInputType
    _min?: ItemStockMinAggregateInputType
    _max?: ItemStockMaxAggregateInputType
  }

  export type ItemStockGroupByOutputType = {
    id: string
    itemId: string
    warehouseId: string
    stockQty: number
    createdAt: Date
    updatedAt: Date
    _count: ItemStockCountAggregateOutputType | null
    _avg: ItemStockAvgAggregateOutputType | null
    _sum: ItemStockSumAggregateOutputType | null
    _min: ItemStockMinAggregateOutputType | null
    _max: ItemStockMaxAggregateOutputType | null
  }

  type GetItemStockGroupByPayload<T extends ItemStockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemStockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemStockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemStockGroupByOutputType[P]>
            : GetScalarType<T[P], ItemStockGroupByOutputType[P]>
        }
      >
    >


  export type ItemStockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemId?: boolean
    warehouseId?: boolean
    stockQty?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    item?: boolean | ItemDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemStock"]>

  export type ItemStockSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemId?: boolean
    warehouseId?: boolean
    stockQty?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    item?: boolean | ItemDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemStock"]>

  export type ItemStockSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemId?: boolean
    warehouseId?: boolean
    stockQty?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    item?: boolean | ItemDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemStock"]>

  export type ItemStockSelectScalar = {
    id?: boolean
    itemId?: boolean
    warehouseId?: boolean
    stockQty?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ItemStockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "itemId" | "warehouseId" | "stockQty" | "createdAt" | "updatedAt", ExtArgs["result"]["itemStock"]>
  export type ItemStockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
  }
  export type ItemStockIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
  }
  export type ItemStockIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
  }

  export type $ItemStockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemStock"
    objects: {
      item: Prisma.$ItemPayload<ExtArgs>
      warehouse: Prisma.$WarehousePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      itemId: string
      warehouseId: string
      stockQty: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["itemStock"]>
    composites: {}
  }

  type ItemStockGetPayload<S extends boolean | null | undefined | ItemStockDefaultArgs> = $Result.GetResult<Prisma.$ItemStockPayload, S>

  type ItemStockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemStockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemStockCountAggregateInputType | true
    }

  export interface ItemStockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemStock'], meta: { name: 'ItemStock' } }
    /**
     * Find zero or one ItemStock that matches the filter.
     * @param {ItemStockFindUniqueArgs} args - Arguments to find a ItemStock
     * @example
     * // Get one ItemStock
     * const itemStock = await prisma.itemStock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemStockFindUniqueArgs>(args: SelectSubset<T, ItemStockFindUniqueArgs<ExtArgs>>): Prisma__ItemStockClient<$Result.GetResult<Prisma.$ItemStockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ItemStock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemStockFindUniqueOrThrowArgs} args - Arguments to find a ItemStock
     * @example
     * // Get one ItemStock
     * const itemStock = await prisma.itemStock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemStockFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemStockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemStockClient<$Result.GetResult<Prisma.$ItemStockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemStock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemStockFindFirstArgs} args - Arguments to find a ItemStock
     * @example
     * // Get one ItemStock
     * const itemStock = await prisma.itemStock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemStockFindFirstArgs>(args?: SelectSubset<T, ItemStockFindFirstArgs<ExtArgs>>): Prisma__ItemStockClient<$Result.GetResult<Prisma.$ItemStockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemStock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemStockFindFirstOrThrowArgs} args - Arguments to find a ItemStock
     * @example
     * // Get one ItemStock
     * const itemStock = await prisma.itemStock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemStockFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemStockFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemStockClient<$Result.GetResult<Prisma.$ItemStockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ItemStocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemStockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemStocks
     * const itemStocks = await prisma.itemStock.findMany()
     * 
     * // Get first 10 ItemStocks
     * const itemStocks = await prisma.itemStock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemStockWithIdOnly = await prisma.itemStock.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemStockFindManyArgs>(args?: SelectSubset<T, ItemStockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemStockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ItemStock.
     * @param {ItemStockCreateArgs} args - Arguments to create a ItemStock.
     * @example
     * // Create one ItemStock
     * const ItemStock = await prisma.itemStock.create({
     *   data: {
     *     // ... data to create a ItemStock
     *   }
     * })
     * 
     */
    create<T extends ItemStockCreateArgs>(args: SelectSubset<T, ItemStockCreateArgs<ExtArgs>>): Prisma__ItemStockClient<$Result.GetResult<Prisma.$ItemStockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ItemStocks.
     * @param {ItemStockCreateManyArgs} args - Arguments to create many ItemStocks.
     * @example
     * // Create many ItemStocks
     * const itemStock = await prisma.itemStock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemStockCreateManyArgs>(args?: SelectSubset<T, ItemStockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ItemStocks and returns the data saved in the database.
     * @param {ItemStockCreateManyAndReturnArgs} args - Arguments to create many ItemStocks.
     * @example
     * // Create many ItemStocks
     * const itemStock = await prisma.itemStock.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ItemStocks and only return the `id`
     * const itemStockWithIdOnly = await prisma.itemStock.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemStockCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemStockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemStockPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ItemStock.
     * @param {ItemStockDeleteArgs} args - Arguments to delete one ItemStock.
     * @example
     * // Delete one ItemStock
     * const ItemStock = await prisma.itemStock.delete({
     *   where: {
     *     // ... filter to delete one ItemStock
     *   }
     * })
     * 
     */
    delete<T extends ItemStockDeleteArgs>(args: SelectSubset<T, ItemStockDeleteArgs<ExtArgs>>): Prisma__ItemStockClient<$Result.GetResult<Prisma.$ItemStockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ItemStock.
     * @param {ItemStockUpdateArgs} args - Arguments to update one ItemStock.
     * @example
     * // Update one ItemStock
     * const itemStock = await prisma.itemStock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemStockUpdateArgs>(args: SelectSubset<T, ItemStockUpdateArgs<ExtArgs>>): Prisma__ItemStockClient<$Result.GetResult<Prisma.$ItemStockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ItemStocks.
     * @param {ItemStockDeleteManyArgs} args - Arguments to filter ItemStocks to delete.
     * @example
     * // Delete a few ItemStocks
     * const { count } = await prisma.itemStock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemStockDeleteManyArgs>(args?: SelectSubset<T, ItemStockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemStocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemStockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemStocks
     * const itemStock = await prisma.itemStock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemStockUpdateManyArgs>(args: SelectSubset<T, ItemStockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemStocks and returns the data updated in the database.
     * @param {ItemStockUpdateManyAndReturnArgs} args - Arguments to update many ItemStocks.
     * @example
     * // Update many ItemStocks
     * const itemStock = await prisma.itemStock.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ItemStocks and only return the `id`
     * const itemStockWithIdOnly = await prisma.itemStock.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItemStockUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemStockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemStockPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ItemStock.
     * @param {ItemStockUpsertArgs} args - Arguments to update or create a ItemStock.
     * @example
     * // Update or create a ItemStock
     * const itemStock = await prisma.itemStock.upsert({
     *   create: {
     *     // ... data to create a ItemStock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemStock we want to update
     *   }
     * })
     */
    upsert<T extends ItemStockUpsertArgs>(args: SelectSubset<T, ItemStockUpsertArgs<ExtArgs>>): Prisma__ItemStockClient<$Result.GetResult<Prisma.$ItemStockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ItemStocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemStockCountArgs} args - Arguments to filter ItemStocks to count.
     * @example
     * // Count the number of ItemStocks
     * const count = await prisma.itemStock.count({
     *   where: {
     *     // ... the filter for the ItemStocks we want to count
     *   }
     * })
    **/
    count<T extends ItemStockCountArgs>(
      args?: Subset<T, ItemStockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemStockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemStock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemStockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemStockAggregateArgs>(args: Subset<T, ItemStockAggregateArgs>): Prisma.PrismaPromise<GetItemStockAggregateType<T>>

    /**
     * Group by ItemStock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemStockGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemStockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemStockGroupByArgs['orderBy'] }
        : { orderBy?: ItemStockGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemStockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemStockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemStock model
   */
  readonly fields: ItemStockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemStock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemStockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    item<T extends ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemDefaultArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    warehouse<T extends WarehouseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WarehouseDefaultArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ItemStock model
   */
  interface ItemStockFieldRefs {
    readonly id: FieldRef<"ItemStock", 'String'>
    readonly itemId: FieldRef<"ItemStock", 'String'>
    readonly warehouseId: FieldRef<"ItemStock", 'String'>
    readonly stockQty: FieldRef<"ItemStock", 'Int'>
    readonly createdAt: FieldRef<"ItemStock", 'DateTime'>
    readonly updatedAt: FieldRef<"ItemStock", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ItemStock findUnique
   */
  export type ItemStockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemStock
     */
    select?: ItemStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemStock
     */
    omit?: ItemStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemStockInclude<ExtArgs> | null
    /**
     * Filter, which ItemStock to fetch.
     */
    where: ItemStockWhereUniqueInput
  }

  /**
   * ItemStock findUniqueOrThrow
   */
  export type ItemStockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemStock
     */
    select?: ItemStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemStock
     */
    omit?: ItemStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemStockInclude<ExtArgs> | null
    /**
     * Filter, which ItemStock to fetch.
     */
    where: ItemStockWhereUniqueInput
  }

  /**
   * ItemStock findFirst
   */
  export type ItemStockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemStock
     */
    select?: ItemStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemStock
     */
    omit?: ItemStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemStockInclude<ExtArgs> | null
    /**
     * Filter, which ItemStock to fetch.
     */
    where?: ItemStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemStocks to fetch.
     */
    orderBy?: ItemStockOrderByWithRelationInput | ItemStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemStocks.
     */
    cursor?: ItemStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemStocks.
     */
    distinct?: ItemStockScalarFieldEnum | ItemStockScalarFieldEnum[]
  }

  /**
   * ItemStock findFirstOrThrow
   */
  export type ItemStockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemStock
     */
    select?: ItemStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemStock
     */
    omit?: ItemStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemStockInclude<ExtArgs> | null
    /**
     * Filter, which ItemStock to fetch.
     */
    where?: ItemStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemStocks to fetch.
     */
    orderBy?: ItemStockOrderByWithRelationInput | ItemStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemStocks.
     */
    cursor?: ItemStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemStocks.
     */
    distinct?: ItemStockScalarFieldEnum | ItemStockScalarFieldEnum[]
  }

  /**
   * ItemStock findMany
   */
  export type ItemStockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemStock
     */
    select?: ItemStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemStock
     */
    omit?: ItemStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemStockInclude<ExtArgs> | null
    /**
     * Filter, which ItemStocks to fetch.
     */
    where?: ItemStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemStocks to fetch.
     */
    orderBy?: ItemStockOrderByWithRelationInput | ItemStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemStocks.
     */
    cursor?: ItemStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemStocks.
     */
    skip?: number
    distinct?: ItemStockScalarFieldEnum | ItemStockScalarFieldEnum[]
  }

  /**
   * ItemStock create
   */
  export type ItemStockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemStock
     */
    select?: ItemStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemStock
     */
    omit?: ItemStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemStockInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemStock.
     */
    data: XOR<ItemStockCreateInput, ItemStockUncheckedCreateInput>
  }

  /**
   * ItemStock createMany
   */
  export type ItemStockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemStocks.
     */
    data: ItemStockCreateManyInput | ItemStockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ItemStock createManyAndReturn
   */
  export type ItemStockCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemStock
     */
    select?: ItemStockSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemStock
     */
    omit?: ItemStockOmit<ExtArgs> | null
    /**
     * The data used to create many ItemStocks.
     */
    data: ItemStockCreateManyInput | ItemStockCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemStockIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemStock update
   */
  export type ItemStockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemStock
     */
    select?: ItemStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemStock
     */
    omit?: ItemStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemStockInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemStock.
     */
    data: XOR<ItemStockUpdateInput, ItemStockUncheckedUpdateInput>
    /**
     * Choose, which ItemStock to update.
     */
    where: ItemStockWhereUniqueInput
  }

  /**
   * ItemStock updateMany
   */
  export type ItemStockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemStocks.
     */
    data: XOR<ItemStockUpdateManyMutationInput, ItemStockUncheckedUpdateManyInput>
    /**
     * Filter which ItemStocks to update
     */
    where?: ItemStockWhereInput
    /**
     * Limit how many ItemStocks to update.
     */
    limit?: number
  }

  /**
   * ItemStock updateManyAndReturn
   */
  export type ItemStockUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemStock
     */
    select?: ItemStockSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemStock
     */
    omit?: ItemStockOmit<ExtArgs> | null
    /**
     * The data used to update ItemStocks.
     */
    data: XOR<ItemStockUpdateManyMutationInput, ItemStockUncheckedUpdateManyInput>
    /**
     * Filter which ItemStocks to update
     */
    where?: ItemStockWhereInput
    /**
     * Limit how many ItemStocks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemStockIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemStock upsert
   */
  export type ItemStockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemStock
     */
    select?: ItemStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemStock
     */
    omit?: ItemStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemStockInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemStock to update in case it exists.
     */
    where: ItemStockWhereUniqueInput
    /**
     * In case the ItemStock found by the `where` argument doesn't exist, create a new ItemStock with this data.
     */
    create: XOR<ItemStockCreateInput, ItemStockUncheckedCreateInput>
    /**
     * In case the ItemStock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemStockUpdateInput, ItemStockUncheckedUpdateInput>
  }

  /**
   * ItemStock delete
   */
  export type ItemStockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemStock
     */
    select?: ItemStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemStock
     */
    omit?: ItemStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemStockInclude<ExtArgs> | null
    /**
     * Filter which ItemStock to delete.
     */
    where: ItemStockWhereUniqueInput
  }

  /**
   * ItemStock deleteMany
   */
  export type ItemStockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemStocks to delete
     */
    where?: ItemStockWhereInput
    /**
     * Limit how many ItemStocks to delete.
     */
    limit?: number
  }

  /**
   * ItemStock without action
   */
  export type ItemStockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemStock
     */
    select?: ItemStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemStock
     */
    omit?: ItemStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemStockInclude<ExtArgs> | null
  }


  /**
   * Model ItemPriceHistory
   */

  export type AggregateItemPriceHistory = {
    _count: ItemPriceHistoryCountAggregateOutputType | null
    _avg: ItemPriceHistoryAvgAggregateOutputType | null
    _sum: ItemPriceHistorySumAggregateOutputType | null
    _min: ItemPriceHistoryMinAggregateOutputType | null
    _max: ItemPriceHistoryMaxAggregateOutputType | null
  }

  export type ItemPriceHistoryAvgAggregateOutputType = {
    price: number | null
  }

  export type ItemPriceHistorySumAggregateOutputType = {
    price: number | null
  }

  export type ItemPriceHistoryMinAggregateOutputType = {
    id: string | null
    itemId: string | null
    price: number | null
    changedAt: Date | null
    userId: string | null
  }

  export type ItemPriceHistoryMaxAggregateOutputType = {
    id: string | null
    itemId: string | null
    price: number | null
    changedAt: Date | null
    userId: string | null
  }

  export type ItemPriceHistoryCountAggregateOutputType = {
    id: number
    itemId: number
    price: number
    changedAt: number
    userId: number
    _all: number
  }


  export type ItemPriceHistoryAvgAggregateInputType = {
    price?: true
  }

  export type ItemPriceHistorySumAggregateInputType = {
    price?: true
  }

  export type ItemPriceHistoryMinAggregateInputType = {
    id?: true
    itemId?: true
    price?: true
    changedAt?: true
    userId?: true
  }

  export type ItemPriceHistoryMaxAggregateInputType = {
    id?: true
    itemId?: true
    price?: true
    changedAt?: true
    userId?: true
  }

  export type ItemPriceHistoryCountAggregateInputType = {
    id?: true
    itemId?: true
    price?: true
    changedAt?: true
    userId?: true
    _all?: true
  }

  export type ItemPriceHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemPriceHistory to aggregate.
     */
    where?: ItemPriceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemPriceHistories to fetch.
     */
    orderBy?: ItemPriceHistoryOrderByWithRelationInput | ItemPriceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemPriceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemPriceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemPriceHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemPriceHistories
    **/
    _count?: true | ItemPriceHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemPriceHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemPriceHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemPriceHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemPriceHistoryMaxAggregateInputType
  }

  export type GetItemPriceHistoryAggregateType<T extends ItemPriceHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateItemPriceHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemPriceHistory[P]>
      : GetScalarType<T[P], AggregateItemPriceHistory[P]>
  }




  export type ItemPriceHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemPriceHistoryWhereInput
    orderBy?: ItemPriceHistoryOrderByWithAggregationInput | ItemPriceHistoryOrderByWithAggregationInput[]
    by: ItemPriceHistoryScalarFieldEnum[] | ItemPriceHistoryScalarFieldEnum
    having?: ItemPriceHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemPriceHistoryCountAggregateInputType | true
    _avg?: ItemPriceHistoryAvgAggregateInputType
    _sum?: ItemPriceHistorySumAggregateInputType
    _min?: ItemPriceHistoryMinAggregateInputType
    _max?: ItemPriceHistoryMaxAggregateInputType
  }

  export type ItemPriceHistoryGroupByOutputType = {
    id: string
    itemId: string
    price: number
    changedAt: Date
    userId: string
    _count: ItemPriceHistoryCountAggregateOutputType | null
    _avg: ItemPriceHistoryAvgAggregateOutputType | null
    _sum: ItemPriceHistorySumAggregateOutputType | null
    _min: ItemPriceHistoryMinAggregateOutputType | null
    _max: ItemPriceHistoryMaxAggregateOutputType | null
  }

  type GetItemPriceHistoryGroupByPayload<T extends ItemPriceHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemPriceHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemPriceHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemPriceHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], ItemPriceHistoryGroupByOutputType[P]>
        }
      >
    >


  export type ItemPriceHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemId?: boolean
    price?: boolean
    changedAt?: boolean
    userId?: boolean
    item?: boolean | ItemDefaultArgs<ExtArgs>
    changedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemPriceHistory"]>

  export type ItemPriceHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemId?: boolean
    price?: boolean
    changedAt?: boolean
    userId?: boolean
    item?: boolean | ItemDefaultArgs<ExtArgs>
    changedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemPriceHistory"]>

  export type ItemPriceHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemId?: boolean
    price?: boolean
    changedAt?: boolean
    userId?: boolean
    item?: boolean | ItemDefaultArgs<ExtArgs>
    changedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemPriceHistory"]>

  export type ItemPriceHistorySelectScalar = {
    id?: boolean
    itemId?: boolean
    price?: boolean
    changedAt?: boolean
    userId?: boolean
  }

  export type ItemPriceHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "itemId" | "price" | "changedAt" | "userId", ExtArgs["result"]["itemPriceHistory"]>
  export type ItemPriceHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemDefaultArgs<ExtArgs>
    changedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ItemPriceHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemDefaultArgs<ExtArgs>
    changedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ItemPriceHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemDefaultArgs<ExtArgs>
    changedBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ItemPriceHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemPriceHistory"
    objects: {
      item: Prisma.$ItemPayload<ExtArgs>
      changedBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      itemId: string
      price: number
      changedAt: Date
      userId: string
    }, ExtArgs["result"]["itemPriceHistory"]>
    composites: {}
  }

  type ItemPriceHistoryGetPayload<S extends boolean | null | undefined | ItemPriceHistoryDefaultArgs> = $Result.GetResult<Prisma.$ItemPriceHistoryPayload, S>

  type ItemPriceHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemPriceHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemPriceHistoryCountAggregateInputType | true
    }

  export interface ItemPriceHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemPriceHistory'], meta: { name: 'ItemPriceHistory' } }
    /**
     * Find zero or one ItemPriceHistory that matches the filter.
     * @param {ItemPriceHistoryFindUniqueArgs} args - Arguments to find a ItemPriceHistory
     * @example
     * // Get one ItemPriceHistory
     * const itemPriceHistory = await prisma.itemPriceHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemPriceHistoryFindUniqueArgs>(args: SelectSubset<T, ItemPriceHistoryFindUniqueArgs<ExtArgs>>): Prisma__ItemPriceHistoryClient<$Result.GetResult<Prisma.$ItemPriceHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ItemPriceHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemPriceHistoryFindUniqueOrThrowArgs} args - Arguments to find a ItemPriceHistory
     * @example
     * // Get one ItemPriceHistory
     * const itemPriceHistory = await prisma.itemPriceHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemPriceHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemPriceHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemPriceHistoryClient<$Result.GetResult<Prisma.$ItemPriceHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemPriceHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPriceHistoryFindFirstArgs} args - Arguments to find a ItemPriceHistory
     * @example
     * // Get one ItemPriceHistory
     * const itemPriceHistory = await prisma.itemPriceHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemPriceHistoryFindFirstArgs>(args?: SelectSubset<T, ItemPriceHistoryFindFirstArgs<ExtArgs>>): Prisma__ItemPriceHistoryClient<$Result.GetResult<Prisma.$ItemPriceHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemPriceHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPriceHistoryFindFirstOrThrowArgs} args - Arguments to find a ItemPriceHistory
     * @example
     * // Get one ItemPriceHistory
     * const itemPriceHistory = await prisma.itemPriceHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemPriceHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemPriceHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemPriceHistoryClient<$Result.GetResult<Prisma.$ItemPriceHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ItemPriceHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPriceHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemPriceHistories
     * const itemPriceHistories = await prisma.itemPriceHistory.findMany()
     * 
     * // Get first 10 ItemPriceHistories
     * const itemPriceHistories = await prisma.itemPriceHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemPriceHistoryWithIdOnly = await prisma.itemPriceHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemPriceHistoryFindManyArgs>(args?: SelectSubset<T, ItemPriceHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPriceHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ItemPriceHistory.
     * @param {ItemPriceHistoryCreateArgs} args - Arguments to create a ItemPriceHistory.
     * @example
     * // Create one ItemPriceHistory
     * const ItemPriceHistory = await prisma.itemPriceHistory.create({
     *   data: {
     *     // ... data to create a ItemPriceHistory
     *   }
     * })
     * 
     */
    create<T extends ItemPriceHistoryCreateArgs>(args: SelectSubset<T, ItemPriceHistoryCreateArgs<ExtArgs>>): Prisma__ItemPriceHistoryClient<$Result.GetResult<Prisma.$ItemPriceHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ItemPriceHistories.
     * @param {ItemPriceHistoryCreateManyArgs} args - Arguments to create many ItemPriceHistories.
     * @example
     * // Create many ItemPriceHistories
     * const itemPriceHistory = await prisma.itemPriceHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemPriceHistoryCreateManyArgs>(args?: SelectSubset<T, ItemPriceHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ItemPriceHistories and returns the data saved in the database.
     * @param {ItemPriceHistoryCreateManyAndReturnArgs} args - Arguments to create many ItemPriceHistories.
     * @example
     * // Create many ItemPriceHistories
     * const itemPriceHistory = await prisma.itemPriceHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ItemPriceHistories and only return the `id`
     * const itemPriceHistoryWithIdOnly = await prisma.itemPriceHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemPriceHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemPriceHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPriceHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ItemPriceHistory.
     * @param {ItemPriceHistoryDeleteArgs} args - Arguments to delete one ItemPriceHistory.
     * @example
     * // Delete one ItemPriceHistory
     * const ItemPriceHistory = await prisma.itemPriceHistory.delete({
     *   where: {
     *     // ... filter to delete one ItemPriceHistory
     *   }
     * })
     * 
     */
    delete<T extends ItemPriceHistoryDeleteArgs>(args: SelectSubset<T, ItemPriceHistoryDeleteArgs<ExtArgs>>): Prisma__ItemPriceHistoryClient<$Result.GetResult<Prisma.$ItemPriceHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ItemPriceHistory.
     * @param {ItemPriceHistoryUpdateArgs} args - Arguments to update one ItemPriceHistory.
     * @example
     * // Update one ItemPriceHistory
     * const itemPriceHistory = await prisma.itemPriceHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemPriceHistoryUpdateArgs>(args: SelectSubset<T, ItemPriceHistoryUpdateArgs<ExtArgs>>): Prisma__ItemPriceHistoryClient<$Result.GetResult<Prisma.$ItemPriceHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ItemPriceHistories.
     * @param {ItemPriceHistoryDeleteManyArgs} args - Arguments to filter ItemPriceHistories to delete.
     * @example
     * // Delete a few ItemPriceHistories
     * const { count } = await prisma.itemPriceHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemPriceHistoryDeleteManyArgs>(args?: SelectSubset<T, ItemPriceHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemPriceHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPriceHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemPriceHistories
     * const itemPriceHistory = await prisma.itemPriceHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemPriceHistoryUpdateManyArgs>(args: SelectSubset<T, ItemPriceHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemPriceHistories and returns the data updated in the database.
     * @param {ItemPriceHistoryUpdateManyAndReturnArgs} args - Arguments to update many ItemPriceHistories.
     * @example
     * // Update many ItemPriceHistories
     * const itemPriceHistory = await prisma.itemPriceHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ItemPriceHistories and only return the `id`
     * const itemPriceHistoryWithIdOnly = await prisma.itemPriceHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItemPriceHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemPriceHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPriceHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ItemPriceHistory.
     * @param {ItemPriceHistoryUpsertArgs} args - Arguments to update or create a ItemPriceHistory.
     * @example
     * // Update or create a ItemPriceHistory
     * const itemPriceHistory = await prisma.itemPriceHistory.upsert({
     *   create: {
     *     // ... data to create a ItemPriceHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemPriceHistory we want to update
     *   }
     * })
     */
    upsert<T extends ItemPriceHistoryUpsertArgs>(args: SelectSubset<T, ItemPriceHistoryUpsertArgs<ExtArgs>>): Prisma__ItemPriceHistoryClient<$Result.GetResult<Prisma.$ItemPriceHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ItemPriceHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPriceHistoryCountArgs} args - Arguments to filter ItemPriceHistories to count.
     * @example
     * // Count the number of ItemPriceHistories
     * const count = await prisma.itemPriceHistory.count({
     *   where: {
     *     // ... the filter for the ItemPriceHistories we want to count
     *   }
     * })
    **/
    count<T extends ItemPriceHistoryCountArgs>(
      args?: Subset<T, ItemPriceHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemPriceHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemPriceHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPriceHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemPriceHistoryAggregateArgs>(args: Subset<T, ItemPriceHistoryAggregateArgs>): Prisma.PrismaPromise<GetItemPriceHistoryAggregateType<T>>

    /**
     * Group by ItemPriceHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPriceHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemPriceHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemPriceHistoryGroupByArgs['orderBy'] }
        : { orderBy?: ItemPriceHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemPriceHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemPriceHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemPriceHistory model
   */
  readonly fields: ItemPriceHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemPriceHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemPriceHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    item<T extends ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemDefaultArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    changedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ItemPriceHistory model
   */
  interface ItemPriceHistoryFieldRefs {
    readonly id: FieldRef<"ItemPriceHistory", 'String'>
    readonly itemId: FieldRef<"ItemPriceHistory", 'String'>
    readonly price: FieldRef<"ItemPriceHistory", 'Float'>
    readonly changedAt: FieldRef<"ItemPriceHistory", 'DateTime'>
    readonly userId: FieldRef<"ItemPriceHistory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ItemPriceHistory findUnique
   */
  export type ItemPriceHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPriceHistory
     */
    select?: ItemPriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPriceHistory
     */
    omit?: ItemPriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPriceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ItemPriceHistory to fetch.
     */
    where: ItemPriceHistoryWhereUniqueInput
  }

  /**
   * ItemPriceHistory findUniqueOrThrow
   */
  export type ItemPriceHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPriceHistory
     */
    select?: ItemPriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPriceHistory
     */
    omit?: ItemPriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPriceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ItemPriceHistory to fetch.
     */
    where: ItemPriceHistoryWhereUniqueInput
  }

  /**
   * ItemPriceHistory findFirst
   */
  export type ItemPriceHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPriceHistory
     */
    select?: ItemPriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPriceHistory
     */
    omit?: ItemPriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPriceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ItemPriceHistory to fetch.
     */
    where?: ItemPriceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemPriceHistories to fetch.
     */
    orderBy?: ItemPriceHistoryOrderByWithRelationInput | ItemPriceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemPriceHistories.
     */
    cursor?: ItemPriceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemPriceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemPriceHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemPriceHistories.
     */
    distinct?: ItemPriceHistoryScalarFieldEnum | ItemPriceHistoryScalarFieldEnum[]
  }

  /**
   * ItemPriceHistory findFirstOrThrow
   */
  export type ItemPriceHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPriceHistory
     */
    select?: ItemPriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPriceHistory
     */
    omit?: ItemPriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPriceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ItemPriceHistory to fetch.
     */
    where?: ItemPriceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemPriceHistories to fetch.
     */
    orderBy?: ItemPriceHistoryOrderByWithRelationInput | ItemPriceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemPriceHistories.
     */
    cursor?: ItemPriceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemPriceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemPriceHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemPriceHistories.
     */
    distinct?: ItemPriceHistoryScalarFieldEnum | ItemPriceHistoryScalarFieldEnum[]
  }

  /**
   * ItemPriceHistory findMany
   */
  export type ItemPriceHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPriceHistory
     */
    select?: ItemPriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPriceHistory
     */
    omit?: ItemPriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPriceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ItemPriceHistories to fetch.
     */
    where?: ItemPriceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemPriceHistories to fetch.
     */
    orderBy?: ItemPriceHistoryOrderByWithRelationInput | ItemPriceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemPriceHistories.
     */
    cursor?: ItemPriceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemPriceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemPriceHistories.
     */
    skip?: number
    distinct?: ItemPriceHistoryScalarFieldEnum | ItemPriceHistoryScalarFieldEnum[]
  }

  /**
   * ItemPriceHistory create
   */
  export type ItemPriceHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPriceHistory
     */
    select?: ItemPriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPriceHistory
     */
    omit?: ItemPriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPriceHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemPriceHistory.
     */
    data: XOR<ItemPriceHistoryCreateInput, ItemPriceHistoryUncheckedCreateInput>
  }

  /**
   * ItemPriceHistory createMany
   */
  export type ItemPriceHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemPriceHistories.
     */
    data: ItemPriceHistoryCreateManyInput | ItemPriceHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ItemPriceHistory createManyAndReturn
   */
  export type ItemPriceHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPriceHistory
     */
    select?: ItemPriceHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPriceHistory
     */
    omit?: ItemPriceHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many ItemPriceHistories.
     */
    data: ItemPriceHistoryCreateManyInput | ItemPriceHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPriceHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemPriceHistory update
   */
  export type ItemPriceHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPriceHistory
     */
    select?: ItemPriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPriceHistory
     */
    omit?: ItemPriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPriceHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemPriceHistory.
     */
    data: XOR<ItemPriceHistoryUpdateInput, ItemPriceHistoryUncheckedUpdateInput>
    /**
     * Choose, which ItemPriceHistory to update.
     */
    where: ItemPriceHistoryWhereUniqueInput
  }

  /**
   * ItemPriceHistory updateMany
   */
  export type ItemPriceHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemPriceHistories.
     */
    data: XOR<ItemPriceHistoryUpdateManyMutationInput, ItemPriceHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ItemPriceHistories to update
     */
    where?: ItemPriceHistoryWhereInput
    /**
     * Limit how many ItemPriceHistories to update.
     */
    limit?: number
  }

  /**
   * ItemPriceHistory updateManyAndReturn
   */
  export type ItemPriceHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPriceHistory
     */
    select?: ItemPriceHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPriceHistory
     */
    omit?: ItemPriceHistoryOmit<ExtArgs> | null
    /**
     * The data used to update ItemPriceHistories.
     */
    data: XOR<ItemPriceHistoryUpdateManyMutationInput, ItemPriceHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ItemPriceHistories to update
     */
    where?: ItemPriceHistoryWhereInput
    /**
     * Limit how many ItemPriceHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPriceHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemPriceHistory upsert
   */
  export type ItemPriceHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPriceHistory
     */
    select?: ItemPriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPriceHistory
     */
    omit?: ItemPriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPriceHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemPriceHistory to update in case it exists.
     */
    where: ItemPriceHistoryWhereUniqueInput
    /**
     * In case the ItemPriceHistory found by the `where` argument doesn't exist, create a new ItemPriceHistory with this data.
     */
    create: XOR<ItemPriceHistoryCreateInput, ItemPriceHistoryUncheckedCreateInput>
    /**
     * In case the ItemPriceHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemPriceHistoryUpdateInput, ItemPriceHistoryUncheckedUpdateInput>
  }

  /**
   * ItemPriceHistory delete
   */
  export type ItemPriceHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPriceHistory
     */
    select?: ItemPriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPriceHistory
     */
    omit?: ItemPriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPriceHistoryInclude<ExtArgs> | null
    /**
     * Filter which ItemPriceHistory to delete.
     */
    where: ItemPriceHistoryWhereUniqueInput
  }

  /**
   * ItemPriceHistory deleteMany
   */
  export type ItemPriceHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemPriceHistories to delete
     */
    where?: ItemPriceHistoryWhereInput
    /**
     * Limit how many ItemPriceHistories to delete.
     */
    limit?: number
  }

  /**
   * ItemPriceHistory without action
   */
  export type ItemPriceHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPriceHistory
     */
    select?: ItemPriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPriceHistory
     */
    omit?: ItemPriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPriceHistoryInclude<ExtArgs> | null
  }


  /**
   * Model Invoice
   */

  export type AggregateInvoice = {
    _count: InvoiceCountAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  export type InvoiceMinAggregateOutputType = {
    id: string | null
    invoiceCode: string | null
    transactionDate: Date | null
    paymentStatus: boolean | null
    buyer: string | null
    paymentMethod: string | null
    createdById: string | null
    createdAt: Date | null
  }

  export type InvoiceMaxAggregateOutputType = {
    id: string | null
    invoiceCode: string | null
    transactionDate: Date | null
    paymentStatus: boolean | null
    buyer: string | null
    paymentMethod: string | null
    createdById: string | null
    createdAt: Date | null
  }

  export type InvoiceCountAggregateOutputType = {
    id: number
    invoiceCode: number
    transactionDate: number
    paymentStatus: number
    buyer: number
    paymentMethod: number
    createdById: number
    createdAt: number
    _all: number
  }


  export type InvoiceMinAggregateInputType = {
    id?: true
    invoiceCode?: true
    transactionDate?: true
    paymentStatus?: true
    buyer?: true
    paymentMethod?: true
    createdById?: true
    createdAt?: true
  }

  export type InvoiceMaxAggregateInputType = {
    id?: true
    invoiceCode?: true
    transactionDate?: true
    paymentStatus?: true
    buyer?: true
    paymentMethod?: true
    createdById?: true
    createdAt?: true
  }

  export type InvoiceCountAggregateInputType = {
    id?: true
    invoiceCode?: true
    transactionDate?: true
    paymentStatus?: true
    buyer?: true
    paymentMethod?: true
    createdById?: true
    createdAt?: true
    _all?: true
  }

  export type InvoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoice to aggregate.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invoices
    **/
    _count?: true | InvoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceMaxAggregateInputType
  }

  export type GetInvoiceAggregateType<T extends InvoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoice[P]>
      : GetScalarType<T[P], AggregateInvoice[P]>
  }




  export type InvoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithAggregationInput | InvoiceOrderByWithAggregationInput[]
    by: InvoiceScalarFieldEnum[] | InvoiceScalarFieldEnum
    having?: InvoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceCountAggregateInputType | true
    _min?: InvoiceMinAggregateInputType
    _max?: InvoiceMaxAggregateInputType
  }

  export type InvoiceGroupByOutputType = {
    id: string
    invoiceCode: string
    transactionDate: Date
    paymentStatus: boolean
    buyer: string | null
    paymentMethod: string
    createdById: string
    createdAt: Date
    _count: InvoiceCountAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  type GetInvoiceGroupByPayload<T extends InvoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
        }
      >
    >


  export type InvoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceCode?: boolean
    transactionDate?: boolean
    paymentStatus?: boolean
    buyer?: boolean
    paymentMethod?: boolean
    createdById?: boolean
    createdAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    transactions?: boolean | Invoice$transactionsArgs<ExtArgs>
    _count?: boolean | InvoiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceCode?: boolean
    transactionDate?: boolean
    paymentStatus?: boolean
    buyer?: boolean
    paymentMethod?: boolean
    createdById?: boolean
    createdAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceCode?: boolean
    transactionDate?: boolean
    paymentStatus?: boolean
    buyer?: boolean
    paymentMethod?: boolean
    createdById?: boolean
    createdAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectScalar = {
    id?: boolean
    invoiceCode?: boolean
    transactionDate?: boolean
    paymentStatus?: boolean
    buyer?: boolean
    paymentMethod?: boolean
    createdById?: boolean
    createdAt?: boolean
  }

  export type InvoiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "invoiceCode" | "transactionDate" | "paymentStatus" | "buyer" | "paymentMethod" | "createdById" | "createdAt", ExtArgs["result"]["invoice"]>
  export type InvoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    transactions?: boolean | Invoice$transactionsArgs<ExtArgs>
    _count?: boolean | InvoiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InvoiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InvoiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $InvoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invoice"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      invoiceCode: string
      transactionDate: Date
      paymentStatus: boolean
      buyer: string | null
      paymentMethod: string
      createdById: string
      createdAt: Date
    }, ExtArgs["result"]["invoice"]>
    composites: {}
  }

  type InvoiceGetPayload<S extends boolean | null | undefined | InvoiceDefaultArgs> = $Result.GetResult<Prisma.$InvoicePayload, S>

  type InvoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvoiceCountAggregateInputType | true
    }

  export interface InvoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invoice'], meta: { name: 'Invoice' } }
    /**
     * Find zero or one Invoice that matches the filter.
     * @param {InvoiceFindUniqueArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoiceFindUniqueArgs>(args: SelectSubset<T, InvoiceFindUniqueArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invoice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvoiceFindUniqueOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoiceFindFirstArgs>(args?: SelectSubset<T, InvoiceFindFirstArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoice.findMany()
     * 
     * // Get first 10 Invoices
     * const invoices = await prisma.invoice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoiceWithIdOnly = await prisma.invoice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvoiceFindManyArgs>(args?: SelectSubset<T, InvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invoice.
     * @param {InvoiceCreateArgs} args - Arguments to create a Invoice.
     * @example
     * // Create one Invoice
     * const Invoice = await prisma.invoice.create({
     *   data: {
     *     // ... data to create a Invoice
     *   }
     * })
     * 
     */
    create<T extends InvoiceCreateArgs>(args: SelectSubset<T, InvoiceCreateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invoices.
     * @param {InvoiceCreateManyArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvoiceCreateManyArgs>(args?: SelectSubset<T, InvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invoices and returns the data saved in the database.
     * @param {InvoiceCreateManyAndReturnArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invoices and only return the `id`
     * const invoiceWithIdOnly = await prisma.invoice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvoiceCreateManyAndReturnArgs>(args?: SelectSubset<T, InvoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invoice.
     * @param {InvoiceDeleteArgs} args - Arguments to delete one Invoice.
     * @example
     * // Delete one Invoice
     * const Invoice = await prisma.invoice.delete({
     *   where: {
     *     // ... filter to delete one Invoice
     *   }
     * })
     * 
     */
    delete<T extends InvoiceDeleteArgs>(args: SelectSubset<T, InvoiceDeleteArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invoice.
     * @param {InvoiceUpdateArgs} args - Arguments to update one Invoice.
     * @example
     * // Update one Invoice
     * const invoice = await prisma.invoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvoiceUpdateArgs>(args: SelectSubset<T, InvoiceUpdateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invoices.
     * @param {InvoiceDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvoiceDeleteManyArgs>(args?: SelectSubset<T, InvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvoiceUpdateManyArgs>(args: SelectSubset<T, InvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices and returns the data updated in the database.
     * @param {InvoiceUpdateManyAndReturnArgs} args - Arguments to update many Invoices.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invoices and only return the `id`
     * const invoiceWithIdOnly = await prisma.invoice.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InvoiceUpdateManyAndReturnArgs>(args: SelectSubset<T, InvoiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invoice.
     * @param {InvoiceUpsertArgs} args - Arguments to update or create a Invoice.
     * @example
     * // Update or create a Invoice
     * const invoice = await prisma.invoice.upsert({
     *   create: {
     *     // ... data to create a Invoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoice we want to update
     *   }
     * })
     */
    upsert<T extends InvoiceUpsertArgs>(args: SelectSubset<T, InvoiceUpsertArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoice.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
    **/
    count<T extends InvoiceCountArgs>(
      args?: Subset<T, InvoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvoiceAggregateArgs>(args: Subset<T, InvoiceAggregateArgs>): Prisma.PrismaPromise<GetInvoiceAggregateType<T>>

    /**
     * Group by Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InvoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invoice model
   */
  readonly fields: InvoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transactions<T extends Invoice$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Invoice$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Invoice model
   */
  interface InvoiceFieldRefs {
    readonly id: FieldRef<"Invoice", 'String'>
    readonly invoiceCode: FieldRef<"Invoice", 'String'>
    readonly transactionDate: FieldRef<"Invoice", 'DateTime'>
    readonly paymentStatus: FieldRef<"Invoice", 'Boolean'>
    readonly buyer: FieldRef<"Invoice", 'String'>
    readonly paymentMethod: FieldRef<"Invoice", 'String'>
    readonly createdById: FieldRef<"Invoice", 'String'>
    readonly createdAt: FieldRef<"Invoice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Invoice findUnique
   */
  export type InvoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findUniqueOrThrow
   */
  export type InvoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findFirst
   */
  export type InvoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findFirstOrThrow
   */
  export type InvoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findMany
   */
  export type InvoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoices to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice create
   */
  export type InvoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Invoice.
     */
    data: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
  }

  /**
   * Invoice createMany
   */
  export type InvoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invoice createManyAndReturn
   */
  export type InvoiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoice update
   */
  export type InvoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Invoice.
     */
    data: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
    /**
     * Choose, which Invoice to update.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice updateMany
   */
  export type InvoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
  }

  /**
   * Invoice updateManyAndReturn
   */
  export type InvoiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoice upsert
   */
  export type InvoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Invoice to update in case it exists.
     */
    where: InvoiceWhereUniqueInput
    /**
     * In case the Invoice found by the `where` argument doesn't exist, create a new Invoice with this data.
     */
    create: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
    /**
     * In case the Invoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
  }

  /**
   * Invoice delete
   */
  export type InvoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter which Invoice to delete.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice deleteMany
   */
  export type InvoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoices to delete
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to delete.
     */
    limit?: number
  }

  /**
   * Invoice.transactions
   */
  export type Invoice$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Invoice without action
   */
  export type InvoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    quantity: number | null
    unitPrice: number | null
    subtotal: number | null
  }

  export type TransactionSumAggregateOutputType = {
    quantity: number | null
    unitPrice: number | null
    subtotal: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    invoiceId: string | null
    itemId: string | null
    warehouseId: string | null
    quantity: number | null
    unitPrice: number | null
    isPurchase: boolean | null
    subtotal: number | null
    createdById: string | null
    createdAt: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    invoiceId: string | null
    itemId: string | null
    warehouseId: string | null
    quantity: number | null
    unitPrice: number | null
    isPurchase: boolean | null
    subtotal: number | null
    createdById: string | null
    createdAt: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    invoiceId: number
    itemId: number
    warehouseId: number
    quantity: number
    unitPrice: number
    isPurchase: number
    subtotal: number
    createdById: number
    createdAt: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    quantity?: true
    unitPrice?: true
    subtotal?: true
  }

  export type TransactionSumAggregateInputType = {
    quantity?: true
    unitPrice?: true
    subtotal?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    invoiceId?: true
    itemId?: true
    warehouseId?: true
    quantity?: true
    unitPrice?: true
    isPurchase?: true
    subtotal?: true
    createdById?: true
    createdAt?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    invoiceId?: true
    itemId?: true
    warehouseId?: true
    quantity?: true
    unitPrice?: true
    isPurchase?: true
    subtotal?: true
    createdById?: true
    createdAt?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    invoiceId?: true
    itemId?: true
    warehouseId?: true
    quantity?: true
    unitPrice?: true
    isPurchase?: true
    subtotal?: true
    createdById?: true
    createdAt?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: string
    invoiceId: string
    itemId: string
    warehouseId: string
    quantity: number
    unitPrice: number
    isPurchase: boolean
    subtotal: number
    createdById: string
    createdAt: Date
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceId?: boolean
    itemId?: boolean
    warehouseId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    isPurchase?: boolean
    subtotal?: boolean
    createdById?: boolean
    createdAt?: boolean
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    stockFlows?: boolean | Transaction$stockFlowsArgs<ExtArgs>
    _count?: boolean | TransactionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceId?: boolean
    itemId?: boolean
    warehouseId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    isPurchase?: boolean
    subtotal?: boolean
    createdById?: boolean
    createdAt?: boolean
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceId?: boolean
    itemId?: boolean
    warehouseId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    isPurchase?: boolean
    subtotal?: boolean
    createdById?: boolean
    createdAt?: boolean
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    invoiceId?: boolean
    itemId?: boolean
    warehouseId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    isPurchase?: boolean
    subtotal?: boolean
    createdById?: boolean
    createdAt?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "invoiceId" | "itemId" | "warehouseId" | "quantity" | "unitPrice" | "isPurchase" | "subtotal" | "createdById" | "createdAt", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    stockFlows?: boolean | Transaction$stockFlowsArgs<ExtArgs>
    _count?: boolean | TransactionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      invoice: Prisma.$InvoicePayload<ExtArgs>
      item: Prisma.$ItemPayload<ExtArgs>
      warehouse: Prisma.$WarehousePayload<ExtArgs>
      createdBy: Prisma.$UserPayload<ExtArgs>
      stockFlows: Prisma.$StockFlowPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      invoiceId: string
      itemId: string
      warehouseId: string
      quantity: number
      unitPrice: number
      isPurchase: boolean
      subtotal: number
      createdById: string
      createdAt: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invoice<T extends InvoiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InvoiceDefaultArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    item<T extends ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemDefaultArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    warehouse<T extends WarehouseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WarehouseDefaultArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    stockFlows<T extends Transaction$stockFlowsArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$stockFlowsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockFlowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'String'>
    readonly invoiceId: FieldRef<"Transaction", 'String'>
    readonly itemId: FieldRef<"Transaction", 'String'>
    readonly warehouseId: FieldRef<"Transaction", 'String'>
    readonly quantity: FieldRef<"Transaction", 'Int'>
    readonly unitPrice: FieldRef<"Transaction", 'Float'>
    readonly isPurchase: FieldRef<"Transaction", 'Boolean'>
    readonly subtotal: FieldRef<"Transaction", 'Float'>
    readonly createdById: FieldRef<"Transaction", 'String'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction.stockFlows
   */
  export type Transaction$stockFlowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockFlow
     */
    select?: StockFlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockFlow
     */
    omit?: StockFlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockFlowInclude<ExtArgs> | null
    where?: StockFlowWhereInput
    orderBy?: StockFlowOrderByWithRelationInput | StockFlowOrderByWithRelationInput[]
    cursor?: StockFlowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockFlowScalarFieldEnum | StockFlowScalarFieldEnum[]
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model StockFlow
   */

  export type AggregateStockFlow = {
    _count: StockFlowCountAggregateOutputType | null
    _avg: StockFlowAvgAggregateOutputType | null
    _sum: StockFlowSumAggregateOutputType | null
    _min: StockFlowMinAggregateOutputType | null
    _max: StockFlowMaxAggregateOutputType | null
  }

  export type StockFlowAvgAggregateOutputType = {
    qty: number | null
    unitCost: number | null
    remainingQty: number | null
  }

  export type StockFlowSumAggregateOutputType = {
    qty: number | null
    unitCost: number | null
    remainingQty: number | null
  }

  export type StockFlowMinAggregateOutputType = {
    id: string | null
    itemId: string | null
    warehouseId: string | null
    transactionId: string | null
    direction: $Enums.StockDirection | null
    qty: number | null
    unitCost: number | null
    remainingQty: number | null
    createdAt: Date | null
  }

  export type StockFlowMaxAggregateOutputType = {
    id: string | null
    itemId: string | null
    warehouseId: string | null
    transactionId: string | null
    direction: $Enums.StockDirection | null
    qty: number | null
    unitCost: number | null
    remainingQty: number | null
    createdAt: Date | null
  }

  export type StockFlowCountAggregateOutputType = {
    id: number
    itemId: number
    warehouseId: number
    transactionId: number
    direction: number
    qty: number
    unitCost: number
    remainingQty: number
    createdAt: number
    _all: number
  }


  export type StockFlowAvgAggregateInputType = {
    qty?: true
    unitCost?: true
    remainingQty?: true
  }

  export type StockFlowSumAggregateInputType = {
    qty?: true
    unitCost?: true
    remainingQty?: true
  }

  export type StockFlowMinAggregateInputType = {
    id?: true
    itemId?: true
    warehouseId?: true
    transactionId?: true
    direction?: true
    qty?: true
    unitCost?: true
    remainingQty?: true
    createdAt?: true
  }

  export type StockFlowMaxAggregateInputType = {
    id?: true
    itemId?: true
    warehouseId?: true
    transactionId?: true
    direction?: true
    qty?: true
    unitCost?: true
    remainingQty?: true
    createdAt?: true
  }

  export type StockFlowCountAggregateInputType = {
    id?: true
    itemId?: true
    warehouseId?: true
    transactionId?: true
    direction?: true
    qty?: true
    unitCost?: true
    remainingQty?: true
    createdAt?: true
    _all?: true
  }

  export type StockFlowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockFlow to aggregate.
     */
    where?: StockFlowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockFlows to fetch.
     */
    orderBy?: StockFlowOrderByWithRelationInput | StockFlowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StockFlowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockFlows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockFlows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StockFlows
    **/
    _count?: true | StockFlowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StockFlowAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StockFlowSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StockFlowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StockFlowMaxAggregateInputType
  }

  export type GetStockFlowAggregateType<T extends StockFlowAggregateArgs> = {
        [P in keyof T & keyof AggregateStockFlow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStockFlow[P]>
      : GetScalarType<T[P], AggregateStockFlow[P]>
  }




  export type StockFlowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockFlowWhereInput
    orderBy?: StockFlowOrderByWithAggregationInput | StockFlowOrderByWithAggregationInput[]
    by: StockFlowScalarFieldEnum[] | StockFlowScalarFieldEnum
    having?: StockFlowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StockFlowCountAggregateInputType | true
    _avg?: StockFlowAvgAggregateInputType
    _sum?: StockFlowSumAggregateInputType
    _min?: StockFlowMinAggregateInputType
    _max?: StockFlowMaxAggregateInputType
  }

  export type StockFlowGroupByOutputType = {
    id: string
    itemId: string
    warehouseId: string
    transactionId: string
    direction: $Enums.StockDirection
    qty: number
    unitCost: number
    remainingQty: number
    createdAt: Date
    _count: StockFlowCountAggregateOutputType | null
    _avg: StockFlowAvgAggregateOutputType | null
    _sum: StockFlowSumAggregateOutputType | null
    _min: StockFlowMinAggregateOutputType | null
    _max: StockFlowMaxAggregateOutputType | null
  }

  type GetStockFlowGroupByPayload<T extends StockFlowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StockFlowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StockFlowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StockFlowGroupByOutputType[P]>
            : GetScalarType<T[P], StockFlowGroupByOutputType[P]>
        }
      >
    >


  export type StockFlowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemId?: boolean
    warehouseId?: boolean
    transactionId?: boolean
    direction?: boolean
    qty?: boolean
    unitCost?: boolean
    remainingQty?: boolean
    createdAt?: boolean
    item?: boolean | ItemDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockFlow"]>

  export type StockFlowSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemId?: boolean
    warehouseId?: boolean
    transactionId?: boolean
    direction?: boolean
    qty?: boolean
    unitCost?: boolean
    remainingQty?: boolean
    createdAt?: boolean
    item?: boolean | ItemDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockFlow"]>

  export type StockFlowSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemId?: boolean
    warehouseId?: boolean
    transactionId?: boolean
    direction?: boolean
    qty?: boolean
    unitCost?: boolean
    remainingQty?: boolean
    createdAt?: boolean
    item?: boolean | ItemDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockFlow"]>

  export type StockFlowSelectScalar = {
    id?: boolean
    itemId?: boolean
    warehouseId?: boolean
    transactionId?: boolean
    direction?: boolean
    qty?: boolean
    unitCost?: boolean
    remainingQty?: boolean
    createdAt?: boolean
  }

  export type StockFlowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "itemId" | "warehouseId" | "transactionId" | "direction" | "qty" | "unitCost" | "remainingQty" | "createdAt", ExtArgs["result"]["stockFlow"]>
  export type StockFlowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
  }
  export type StockFlowIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
  }
  export type StockFlowIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
  }

  export type $StockFlowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StockFlow"
    objects: {
      item: Prisma.$ItemPayload<ExtArgs>
      warehouse: Prisma.$WarehousePayload<ExtArgs>
      transaction: Prisma.$TransactionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      itemId: string
      warehouseId: string
      transactionId: string
      direction: $Enums.StockDirection
      qty: number
      unitCost: number
      remainingQty: number
      createdAt: Date
    }, ExtArgs["result"]["stockFlow"]>
    composites: {}
  }

  type StockFlowGetPayload<S extends boolean | null | undefined | StockFlowDefaultArgs> = $Result.GetResult<Prisma.$StockFlowPayload, S>

  type StockFlowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StockFlowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StockFlowCountAggregateInputType | true
    }

  export interface StockFlowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StockFlow'], meta: { name: 'StockFlow' } }
    /**
     * Find zero or one StockFlow that matches the filter.
     * @param {StockFlowFindUniqueArgs} args - Arguments to find a StockFlow
     * @example
     * // Get one StockFlow
     * const stockFlow = await prisma.stockFlow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StockFlowFindUniqueArgs>(args: SelectSubset<T, StockFlowFindUniqueArgs<ExtArgs>>): Prisma__StockFlowClient<$Result.GetResult<Prisma.$StockFlowPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StockFlow that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StockFlowFindUniqueOrThrowArgs} args - Arguments to find a StockFlow
     * @example
     * // Get one StockFlow
     * const stockFlow = await prisma.stockFlow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StockFlowFindUniqueOrThrowArgs>(args: SelectSubset<T, StockFlowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StockFlowClient<$Result.GetResult<Prisma.$StockFlowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StockFlow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockFlowFindFirstArgs} args - Arguments to find a StockFlow
     * @example
     * // Get one StockFlow
     * const stockFlow = await prisma.stockFlow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StockFlowFindFirstArgs>(args?: SelectSubset<T, StockFlowFindFirstArgs<ExtArgs>>): Prisma__StockFlowClient<$Result.GetResult<Prisma.$StockFlowPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StockFlow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockFlowFindFirstOrThrowArgs} args - Arguments to find a StockFlow
     * @example
     * // Get one StockFlow
     * const stockFlow = await prisma.stockFlow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StockFlowFindFirstOrThrowArgs>(args?: SelectSubset<T, StockFlowFindFirstOrThrowArgs<ExtArgs>>): Prisma__StockFlowClient<$Result.GetResult<Prisma.$StockFlowPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StockFlows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockFlowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StockFlows
     * const stockFlows = await prisma.stockFlow.findMany()
     * 
     * // Get first 10 StockFlows
     * const stockFlows = await prisma.stockFlow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stockFlowWithIdOnly = await prisma.stockFlow.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StockFlowFindManyArgs>(args?: SelectSubset<T, StockFlowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockFlowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StockFlow.
     * @param {StockFlowCreateArgs} args - Arguments to create a StockFlow.
     * @example
     * // Create one StockFlow
     * const StockFlow = await prisma.stockFlow.create({
     *   data: {
     *     // ... data to create a StockFlow
     *   }
     * })
     * 
     */
    create<T extends StockFlowCreateArgs>(args: SelectSubset<T, StockFlowCreateArgs<ExtArgs>>): Prisma__StockFlowClient<$Result.GetResult<Prisma.$StockFlowPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StockFlows.
     * @param {StockFlowCreateManyArgs} args - Arguments to create many StockFlows.
     * @example
     * // Create many StockFlows
     * const stockFlow = await prisma.stockFlow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StockFlowCreateManyArgs>(args?: SelectSubset<T, StockFlowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StockFlows and returns the data saved in the database.
     * @param {StockFlowCreateManyAndReturnArgs} args - Arguments to create many StockFlows.
     * @example
     * // Create many StockFlows
     * const stockFlow = await prisma.stockFlow.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StockFlows and only return the `id`
     * const stockFlowWithIdOnly = await prisma.stockFlow.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StockFlowCreateManyAndReturnArgs>(args?: SelectSubset<T, StockFlowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockFlowPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StockFlow.
     * @param {StockFlowDeleteArgs} args - Arguments to delete one StockFlow.
     * @example
     * // Delete one StockFlow
     * const StockFlow = await prisma.stockFlow.delete({
     *   where: {
     *     // ... filter to delete one StockFlow
     *   }
     * })
     * 
     */
    delete<T extends StockFlowDeleteArgs>(args: SelectSubset<T, StockFlowDeleteArgs<ExtArgs>>): Prisma__StockFlowClient<$Result.GetResult<Prisma.$StockFlowPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StockFlow.
     * @param {StockFlowUpdateArgs} args - Arguments to update one StockFlow.
     * @example
     * // Update one StockFlow
     * const stockFlow = await prisma.stockFlow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StockFlowUpdateArgs>(args: SelectSubset<T, StockFlowUpdateArgs<ExtArgs>>): Prisma__StockFlowClient<$Result.GetResult<Prisma.$StockFlowPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StockFlows.
     * @param {StockFlowDeleteManyArgs} args - Arguments to filter StockFlows to delete.
     * @example
     * // Delete a few StockFlows
     * const { count } = await prisma.stockFlow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StockFlowDeleteManyArgs>(args?: SelectSubset<T, StockFlowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockFlows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockFlowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StockFlows
     * const stockFlow = await prisma.stockFlow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StockFlowUpdateManyArgs>(args: SelectSubset<T, StockFlowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockFlows and returns the data updated in the database.
     * @param {StockFlowUpdateManyAndReturnArgs} args - Arguments to update many StockFlows.
     * @example
     * // Update many StockFlows
     * const stockFlow = await prisma.stockFlow.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StockFlows and only return the `id`
     * const stockFlowWithIdOnly = await prisma.stockFlow.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StockFlowUpdateManyAndReturnArgs>(args: SelectSubset<T, StockFlowUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockFlowPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StockFlow.
     * @param {StockFlowUpsertArgs} args - Arguments to update or create a StockFlow.
     * @example
     * // Update or create a StockFlow
     * const stockFlow = await prisma.stockFlow.upsert({
     *   create: {
     *     // ... data to create a StockFlow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StockFlow we want to update
     *   }
     * })
     */
    upsert<T extends StockFlowUpsertArgs>(args: SelectSubset<T, StockFlowUpsertArgs<ExtArgs>>): Prisma__StockFlowClient<$Result.GetResult<Prisma.$StockFlowPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StockFlows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockFlowCountArgs} args - Arguments to filter StockFlows to count.
     * @example
     * // Count the number of StockFlows
     * const count = await prisma.stockFlow.count({
     *   where: {
     *     // ... the filter for the StockFlows we want to count
     *   }
     * })
    **/
    count<T extends StockFlowCountArgs>(
      args?: Subset<T, StockFlowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StockFlowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StockFlow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockFlowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StockFlowAggregateArgs>(args: Subset<T, StockFlowAggregateArgs>): Prisma.PrismaPromise<GetStockFlowAggregateType<T>>

    /**
     * Group by StockFlow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockFlowGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StockFlowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StockFlowGroupByArgs['orderBy'] }
        : { orderBy?: StockFlowGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StockFlowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockFlowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StockFlow model
   */
  readonly fields: StockFlowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StockFlow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StockFlowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    item<T extends ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemDefaultArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    warehouse<T extends WarehouseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WarehouseDefaultArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transaction<T extends TransactionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TransactionDefaultArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StockFlow model
   */
  interface StockFlowFieldRefs {
    readonly id: FieldRef<"StockFlow", 'String'>
    readonly itemId: FieldRef<"StockFlow", 'String'>
    readonly warehouseId: FieldRef<"StockFlow", 'String'>
    readonly transactionId: FieldRef<"StockFlow", 'String'>
    readonly direction: FieldRef<"StockFlow", 'StockDirection'>
    readonly qty: FieldRef<"StockFlow", 'Int'>
    readonly unitCost: FieldRef<"StockFlow", 'Float'>
    readonly remainingQty: FieldRef<"StockFlow", 'Int'>
    readonly createdAt: FieldRef<"StockFlow", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StockFlow findUnique
   */
  export type StockFlowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockFlow
     */
    select?: StockFlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockFlow
     */
    omit?: StockFlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockFlowInclude<ExtArgs> | null
    /**
     * Filter, which StockFlow to fetch.
     */
    where: StockFlowWhereUniqueInput
  }

  /**
   * StockFlow findUniqueOrThrow
   */
  export type StockFlowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockFlow
     */
    select?: StockFlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockFlow
     */
    omit?: StockFlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockFlowInclude<ExtArgs> | null
    /**
     * Filter, which StockFlow to fetch.
     */
    where: StockFlowWhereUniqueInput
  }

  /**
   * StockFlow findFirst
   */
  export type StockFlowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockFlow
     */
    select?: StockFlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockFlow
     */
    omit?: StockFlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockFlowInclude<ExtArgs> | null
    /**
     * Filter, which StockFlow to fetch.
     */
    where?: StockFlowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockFlows to fetch.
     */
    orderBy?: StockFlowOrderByWithRelationInput | StockFlowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockFlows.
     */
    cursor?: StockFlowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockFlows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockFlows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockFlows.
     */
    distinct?: StockFlowScalarFieldEnum | StockFlowScalarFieldEnum[]
  }

  /**
   * StockFlow findFirstOrThrow
   */
  export type StockFlowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockFlow
     */
    select?: StockFlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockFlow
     */
    omit?: StockFlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockFlowInclude<ExtArgs> | null
    /**
     * Filter, which StockFlow to fetch.
     */
    where?: StockFlowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockFlows to fetch.
     */
    orderBy?: StockFlowOrderByWithRelationInput | StockFlowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockFlows.
     */
    cursor?: StockFlowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockFlows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockFlows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockFlows.
     */
    distinct?: StockFlowScalarFieldEnum | StockFlowScalarFieldEnum[]
  }

  /**
   * StockFlow findMany
   */
  export type StockFlowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockFlow
     */
    select?: StockFlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockFlow
     */
    omit?: StockFlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockFlowInclude<ExtArgs> | null
    /**
     * Filter, which StockFlows to fetch.
     */
    where?: StockFlowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockFlows to fetch.
     */
    orderBy?: StockFlowOrderByWithRelationInput | StockFlowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StockFlows.
     */
    cursor?: StockFlowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockFlows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockFlows.
     */
    skip?: number
    distinct?: StockFlowScalarFieldEnum | StockFlowScalarFieldEnum[]
  }

  /**
   * StockFlow create
   */
  export type StockFlowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockFlow
     */
    select?: StockFlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockFlow
     */
    omit?: StockFlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockFlowInclude<ExtArgs> | null
    /**
     * The data needed to create a StockFlow.
     */
    data: XOR<StockFlowCreateInput, StockFlowUncheckedCreateInput>
  }

  /**
   * StockFlow createMany
   */
  export type StockFlowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StockFlows.
     */
    data: StockFlowCreateManyInput | StockFlowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StockFlow createManyAndReturn
   */
  export type StockFlowCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockFlow
     */
    select?: StockFlowSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StockFlow
     */
    omit?: StockFlowOmit<ExtArgs> | null
    /**
     * The data used to create many StockFlows.
     */
    data: StockFlowCreateManyInput | StockFlowCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockFlowIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StockFlow update
   */
  export type StockFlowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockFlow
     */
    select?: StockFlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockFlow
     */
    omit?: StockFlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockFlowInclude<ExtArgs> | null
    /**
     * The data needed to update a StockFlow.
     */
    data: XOR<StockFlowUpdateInput, StockFlowUncheckedUpdateInput>
    /**
     * Choose, which StockFlow to update.
     */
    where: StockFlowWhereUniqueInput
  }

  /**
   * StockFlow updateMany
   */
  export type StockFlowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StockFlows.
     */
    data: XOR<StockFlowUpdateManyMutationInput, StockFlowUncheckedUpdateManyInput>
    /**
     * Filter which StockFlows to update
     */
    where?: StockFlowWhereInput
    /**
     * Limit how many StockFlows to update.
     */
    limit?: number
  }

  /**
   * StockFlow updateManyAndReturn
   */
  export type StockFlowUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockFlow
     */
    select?: StockFlowSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StockFlow
     */
    omit?: StockFlowOmit<ExtArgs> | null
    /**
     * The data used to update StockFlows.
     */
    data: XOR<StockFlowUpdateManyMutationInput, StockFlowUncheckedUpdateManyInput>
    /**
     * Filter which StockFlows to update
     */
    where?: StockFlowWhereInput
    /**
     * Limit how many StockFlows to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockFlowIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StockFlow upsert
   */
  export type StockFlowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockFlow
     */
    select?: StockFlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockFlow
     */
    omit?: StockFlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockFlowInclude<ExtArgs> | null
    /**
     * The filter to search for the StockFlow to update in case it exists.
     */
    where: StockFlowWhereUniqueInput
    /**
     * In case the StockFlow found by the `where` argument doesn't exist, create a new StockFlow with this data.
     */
    create: XOR<StockFlowCreateInput, StockFlowUncheckedCreateInput>
    /**
     * In case the StockFlow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StockFlowUpdateInput, StockFlowUncheckedUpdateInput>
  }

  /**
   * StockFlow delete
   */
  export type StockFlowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockFlow
     */
    select?: StockFlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockFlow
     */
    omit?: StockFlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockFlowInclude<ExtArgs> | null
    /**
     * Filter which StockFlow to delete.
     */
    where: StockFlowWhereUniqueInput
  }

  /**
   * StockFlow deleteMany
   */
  export type StockFlowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockFlows to delete
     */
    where?: StockFlowWhereInput
    /**
     * Limit how many StockFlows to delete.
     */
    limit?: number
  }

  /**
   * StockFlow without action
   */
  export type StockFlowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockFlow
     */
    select?: StockFlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockFlow
     */
    omit?: StockFlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockFlowInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    username: 'username',
    email: 'email',
    phone: 'phone',
    role: 'role',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WarehouseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type WarehouseScalarFieldEnum = (typeof WarehouseScalarFieldEnum)[keyof typeof WarehouseScalarFieldEnum]


  export const ItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    currentPrice: 'currentPrice',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum]


  export const ItemStockScalarFieldEnum: {
    id: 'id',
    itemId: 'itemId',
    warehouseId: 'warehouseId',
    stockQty: 'stockQty',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ItemStockScalarFieldEnum = (typeof ItemStockScalarFieldEnum)[keyof typeof ItemStockScalarFieldEnum]


  export const ItemPriceHistoryScalarFieldEnum: {
    id: 'id',
    itemId: 'itemId',
    price: 'price',
    changedAt: 'changedAt',
    userId: 'userId'
  };

  export type ItemPriceHistoryScalarFieldEnum = (typeof ItemPriceHistoryScalarFieldEnum)[keyof typeof ItemPriceHistoryScalarFieldEnum]


  export const InvoiceScalarFieldEnum: {
    id: 'id',
    invoiceCode: 'invoiceCode',
    transactionDate: 'transactionDate',
    paymentStatus: 'paymentStatus',
    buyer: 'buyer',
    paymentMethod: 'paymentMethod',
    createdById: 'createdById',
    createdAt: 'createdAt'
  };

  export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    invoiceId: 'invoiceId',
    itemId: 'itemId',
    warehouseId: 'warehouseId',
    quantity: 'quantity',
    unitPrice: 'unitPrice',
    isPurchase: 'isPurchase',
    subtotal: 'subtotal',
    createdById: 'createdById',
    createdAt: 'createdAt'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const StockFlowScalarFieldEnum: {
    id: 'id',
    itemId: 'itemId',
    warehouseId: 'warehouseId',
    transactionId: 'transactionId',
    direction: 'direction',
    qty: 'qty',
    unitCost: 'unitCost',
    remainingQty: 'remainingQty',
    createdAt: 'createdAt'
  };

  export type StockFlowScalarFieldEnum = (typeof StockFlowScalarFieldEnum)[keyof typeof StockFlowScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'WarehouseType'
   */
  export type EnumWarehouseTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WarehouseType'>
    


  /**
   * Reference to a field of type 'WarehouseType[]'
   */
  export type ListEnumWarehouseTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WarehouseType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'StockDirection'
   */
  export type EnumStockDirectionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StockDirection'>
    


  /**
   * Reference to a field of type 'StockDirection[]'
   */
  export type ListEnumStockDirectionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StockDirection[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    invoices?: InvoiceListRelationFilter
    transactions?: TransactionListRelationFilter
    priceHistories?: ItemPriceHistoryListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    invoices?: InvoiceOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
    priceHistories?: ItemPriceHistoryOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullName?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    invoices?: InvoiceListRelationFilter
    transactions?: TransactionListRelationFilter
    priceHistories?: ItemPriceHistoryListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type WarehouseWhereInput = {
    AND?: WarehouseWhereInput | WarehouseWhereInput[]
    OR?: WarehouseWhereInput[]
    NOT?: WarehouseWhereInput | WarehouseWhereInput[]
    id?: StringFilter<"Warehouse"> | string
    name?: StringFilter<"Warehouse"> | string
    address?: StringFilter<"Warehouse"> | string
    type?: EnumWarehouseTypeFilter<"Warehouse"> | $Enums.WarehouseType
    createdAt?: DateTimeFilter<"Warehouse"> | Date | string
    updatedAt?: DateTimeFilter<"Warehouse"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Warehouse"> | Date | string | null
    itemStocks?: ItemStockListRelationFilter
    transactions?: TransactionListRelationFilter
    stockFlows?: StockFlowListRelationFilter
  }

  export type WarehouseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    itemStocks?: ItemStockOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
    stockFlows?: StockFlowOrderByRelationAggregateInput
  }

  export type WarehouseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WarehouseWhereInput | WarehouseWhereInput[]
    OR?: WarehouseWhereInput[]
    NOT?: WarehouseWhereInput | WarehouseWhereInput[]
    name?: StringFilter<"Warehouse"> | string
    address?: StringFilter<"Warehouse"> | string
    type?: EnumWarehouseTypeFilter<"Warehouse"> | $Enums.WarehouseType
    createdAt?: DateTimeFilter<"Warehouse"> | Date | string
    updatedAt?: DateTimeFilter<"Warehouse"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Warehouse"> | Date | string | null
    itemStocks?: ItemStockListRelationFilter
    transactions?: TransactionListRelationFilter
    stockFlows?: StockFlowListRelationFilter
  }, "id">

  export type WarehouseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: WarehouseCountOrderByAggregateInput
    _max?: WarehouseMaxOrderByAggregateInput
    _min?: WarehouseMinOrderByAggregateInput
  }

  export type WarehouseScalarWhereWithAggregatesInput = {
    AND?: WarehouseScalarWhereWithAggregatesInput | WarehouseScalarWhereWithAggregatesInput[]
    OR?: WarehouseScalarWhereWithAggregatesInput[]
    NOT?: WarehouseScalarWhereWithAggregatesInput | WarehouseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Warehouse"> | string
    name?: StringWithAggregatesFilter<"Warehouse"> | string
    address?: StringWithAggregatesFilter<"Warehouse"> | string
    type?: EnumWarehouseTypeWithAggregatesFilter<"Warehouse"> | $Enums.WarehouseType
    createdAt?: DateTimeWithAggregatesFilter<"Warehouse"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Warehouse"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Warehouse"> | Date | string | null
  }

  export type ItemWhereInput = {
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    id?: StringFilter<"Item"> | string
    name?: StringFilter<"Item"> | string
    currentPrice?: FloatFilter<"Item"> | number
    createdAt?: DateTimeFilter<"Item"> | Date | string
    updatedAt?: DateTimeFilter<"Item"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Item"> | Date | string | null
    itemStocks?: ItemStockListRelationFilter
    priceHistories?: ItemPriceHistoryListRelationFilter
    transactions?: TransactionListRelationFilter
    stockFlows?: StockFlowListRelationFilter
  }

  export type ItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    currentPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    itemStocks?: ItemStockOrderByRelationAggregateInput
    priceHistories?: ItemPriceHistoryOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
    stockFlows?: StockFlowOrderByRelationAggregateInput
  }

  export type ItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    name?: StringFilter<"Item"> | string
    currentPrice?: FloatFilter<"Item"> | number
    createdAt?: DateTimeFilter<"Item"> | Date | string
    updatedAt?: DateTimeFilter<"Item"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Item"> | Date | string | null
    itemStocks?: ItemStockListRelationFilter
    priceHistories?: ItemPriceHistoryListRelationFilter
    transactions?: TransactionListRelationFilter
    stockFlows?: StockFlowListRelationFilter
  }, "id">

  export type ItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    currentPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: ItemCountOrderByAggregateInput
    _avg?: ItemAvgOrderByAggregateInput
    _max?: ItemMaxOrderByAggregateInput
    _min?: ItemMinOrderByAggregateInput
    _sum?: ItemSumOrderByAggregateInput
  }

  export type ItemScalarWhereWithAggregatesInput = {
    AND?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    OR?: ItemScalarWhereWithAggregatesInput[]
    NOT?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Item"> | string
    name?: StringWithAggregatesFilter<"Item"> | string
    currentPrice?: FloatWithAggregatesFilter<"Item"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Item"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Item"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Item"> | Date | string | null
  }

  export type ItemStockWhereInput = {
    AND?: ItemStockWhereInput | ItemStockWhereInput[]
    OR?: ItemStockWhereInput[]
    NOT?: ItemStockWhereInput | ItemStockWhereInput[]
    id?: StringFilter<"ItemStock"> | string
    itemId?: StringFilter<"ItemStock"> | string
    warehouseId?: StringFilter<"ItemStock"> | string
    stockQty?: IntFilter<"ItemStock"> | number
    createdAt?: DateTimeFilter<"ItemStock"> | Date | string
    updatedAt?: DateTimeFilter<"ItemStock"> | Date | string
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
    warehouse?: XOR<WarehouseScalarRelationFilter, WarehouseWhereInput>
  }

  export type ItemStockOrderByWithRelationInput = {
    id?: SortOrder
    itemId?: SortOrder
    warehouseId?: SortOrder
    stockQty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    item?: ItemOrderByWithRelationInput
    warehouse?: WarehouseOrderByWithRelationInput
  }

  export type ItemStockWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    itemId_warehouseId?: ItemStockItemIdWarehouseIdCompoundUniqueInput
    AND?: ItemStockWhereInput | ItemStockWhereInput[]
    OR?: ItemStockWhereInput[]
    NOT?: ItemStockWhereInput | ItemStockWhereInput[]
    itemId?: StringFilter<"ItemStock"> | string
    warehouseId?: StringFilter<"ItemStock"> | string
    stockQty?: IntFilter<"ItemStock"> | number
    createdAt?: DateTimeFilter<"ItemStock"> | Date | string
    updatedAt?: DateTimeFilter<"ItemStock"> | Date | string
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
    warehouse?: XOR<WarehouseScalarRelationFilter, WarehouseWhereInput>
  }, "id" | "itemId_warehouseId">

  export type ItemStockOrderByWithAggregationInput = {
    id?: SortOrder
    itemId?: SortOrder
    warehouseId?: SortOrder
    stockQty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ItemStockCountOrderByAggregateInput
    _avg?: ItemStockAvgOrderByAggregateInput
    _max?: ItemStockMaxOrderByAggregateInput
    _min?: ItemStockMinOrderByAggregateInput
    _sum?: ItemStockSumOrderByAggregateInput
  }

  export type ItemStockScalarWhereWithAggregatesInput = {
    AND?: ItemStockScalarWhereWithAggregatesInput | ItemStockScalarWhereWithAggregatesInput[]
    OR?: ItemStockScalarWhereWithAggregatesInput[]
    NOT?: ItemStockScalarWhereWithAggregatesInput | ItemStockScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ItemStock"> | string
    itemId?: StringWithAggregatesFilter<"ItemStock"> | string
    warehouseId?: StringWithAggregatesFilter<"ItemStock"> | string
    stockQty?: IntWithAggregatesFilter<"ItemStock"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ItemStock"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ItemStock"> | Date | string
  }

  export type ItemPriceHistoryWhereInput = {
    AND?: ItemPriceHistoryWhereInput | ItemPriceHistoryWhereInput[]
    OR?: ItemPriceHistoryWhereInput[]
    NOT?: ItemPriceHistoryWhereInput | ItemPriceHistoryWhereInput[]
    id?: StringFilter<"ItemPriceHistory"> | string
    itemId?: StringFilter<"ItemPriceHistory"> | string
    price?: FloatFilter<"ItemPriceHistory"> | number
    changedAt?: DateTimeFilter<"ItemPriceHistory"> | Date | string
    userId?: StringFilter<"ItemPriceHistory"> | string
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
    changedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ItemPriceHistoryOrderByWithRelationInput = {
    id?: SortOrder
    itemId?: SortOrder
    price?: SortOrder
    changedAt?: SortOrder
    userId?: SortOrder
    item?: ItemOrderByWithRelationInput
    changedBy?: UserOrderByWithRelationInput
  }

  export type ItemPriceHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ItemPriceHistoryWhereInput | ItemPriceHistoryWhereInput[]
    OR?: ItemPriceHistoryWhereInput[]
    NOT?: ItemPriceHistoryWhereInput | ItemPriceHistoryWhereInput[]
    itemId?: StringFilter<"ItemPriceHistory"> | string
    price?: FloatFilter<"ItemPriceHistory"> | number
    changedAt?: DateTimeFilter<"ItemPriceHistory"> | Date | string
    userId?: StringFilter<"ItemPriceHistory"> | string
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
    changedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ItemPriceHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    itemId?: SortOrder
    price?: SortOrder
    changedAt?: SortOrder
    userId?: SortOrder
    _count?: ItemPriceHistoryCountOrderByAggregateInput
    _avg?: ItemPriceHistoryAvgOrderByAggregateInput
    _max?: ItemPriceHistoryMaxOrderByAggregateInput
    _min?: ItemPriceHistoryMinOrderByAggregateInput
    _sum?: ItemPriceHistorySumOrderByAggregateInput
  }

  export type ItemPriceHistoryScalarWhereWithAggregatesInput = {
    AND?: ItemPriceHistoryScalarWhereWithAggregatesInput | ItemPriceHistoryScalarWhereWithAggregatesInput[]
    OR?: ItemPriceHistoryScalarWhereWithAggregatesInput[]
    NOT?: ItemPriceHistoryScalarWhereWithAggregatesInput | ItemPriceHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ItemPriceHistory"> | string
    itemId?: StringWithAggregatesFilter<"ItemPriceHistory"> | string
    price?: FloatWithAggregatesFilter<"ItemPriceHistory"> | number
    changedAt?: DateTimeWithAggregatesFilter<"ItemPriceHistory"> | Date | string
    userId?: StringWithAggregatesFilter<"ItemPriceHistory"> | string
  }

  export type InvoiceWhereInput = {
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    id?: StringFilter<"Invoice"> | string
    invoiceCode?: StringFilter<"Invoice"> | string
    transactionDate?: DateTimeFilter<"Invoice"> | Date | string
    paymentStatus?: BoolFilter<"Invoice"> | boolean
    buyer?: StringNullableFilter<"Invoice"> | string | null
    paymentMethod?: StringFilter<"Invoice"> | string
    createdById?: StringFilter<"Invoice"> | string
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    transactions?: TransactionListRelationFilter
  }

  export type InvoiceOrderByWithRelationInput = {
    id?: SortOrder
    invoiceCode?: SortOrder
    transactionDate?: SortOrder
    paymentStatus?: SortOrder
    buyer?: SortOrderInput | SortOrder
    paymentMethod?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    transactions?: TransactionOrderByRelationAggregateInput
  }

  export type InvoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    invoiceCode?: string
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    transactionDate?: DateTimeFilter<"Invoice"> | Date | string
    paymentStatus?: BoolFilter<"Invoice"> | boolean
    buyer?: StringNullableFilter<"Invoice"> | string | null
    paymentMethod?: StringFilter<"Invoice"> | string
    createdById?: StringFilter<"Invoice"> | string
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    transactions?: TransactionListRelationFilter
  }, "id" | "invoiceCode">

  export type InvoiceOrderByWithAggregationInput = {
    id?: SortOrder
    invoiceCode?: SortOrder
    transactionDate?: SortOrder
    paymentStatus?: SortOrder
    buyer?: SortOrderInput | SortOrder
    paymentMethod?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    _count?: InvoiceCountOrderByAggregateInput
    _max?: InvoiceMaxOrderByAggregateInput
    _min?: InvoiceMinOrderByAggregateInput
  }

  export type InvoiceScalarWhereWithAggregatesInput = {
    AND?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    OR?: InvoiceScalarWhereWithAggregatesInput[]
    NOT?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Invoice"> | string
    invoiceCode?: StringWithAggregatesFilter<"Invoice"> | string
    transactionDate?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
    paymentStatus?: BoolWithAggregatesFilter<"Invoice"> | boolean
    buyer?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    paymentMethod?: StringWithAggregatesFilter<"Invoice"> | string
    createdById?: StringWithAggregatesFilter<"Invoice"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: StringFilter<"Transaction"> | string
    invoiceId?: StringFilter<"Transaction"> | string
    itemId?: StringFilter<"Transaction"> | string
    warehouseId?: StringFilter<"Transaction"> | string
    quantity?: IntFilter<"Transaction"> | number
    unitPrice?: FloatFilter<"Transaction"> | number
    isPurchase?: BoolFilter<"Transaction"> | boolean
    subtotal?: FloatFilter<"Transaction"> | number
    createdById?: StringFilter<"Transaction"> | string
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    invoice?: XOR<InvoiceScalarRelationFilter, InvoiceWhereInput>
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
    warehouse?: XOR<WarehouseScalarRelationFilter, WarehouseWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    stockFlows?: StockFlowListRelationFilter
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    itemId?: SortOrder
    warehouseId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    isPurchase?: SortOrder
    subtotal?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    invoice?: InvoiceOrderByWithRelationInput
    item?: ItemOrderByWithRelationInput
    warehouse?: WarehouseOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
    stockFlows?: StockFlowOrderByRelationAggregateInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    invoiceId?: StringFilter<"Transaction"> | string
    itemId?: StringFilter<"Transaction"> | string
    warehouseId?: StringFilter<"Transaction"> | string
    quantity?: IntFilter<"Transaction"> | number
    unitPrice?: FloatFilter<"Transaction"> | number
    isPurchase?: BoolFilter<"Transaction"> | boolean
    subtotal?: FloatFilter<"Transaction"> | number
    createdById?: StringFilter<"Transaction"> | string
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    invoice?: XOR<InvoiceScalarRelationFilter, InvoiceWhereInput>
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
    warehouse?: XOR<WarehouseScalarRelationFilter, WarehouseWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    stockFlows?: StockFlowListRelationFilter
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    itemId?: SortOrder
    warehouseId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    isPurchase?: SortOrder
    subtotal?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transaction"> | string
    invoiceId?: StringWithAggregatesFilter<"Transaction"> | string
    itemId?: StringWithAggregatesFilter<"Transaction"> | string
    warehouseId?: StringWithAggregatesFilter<"Transaction"> | string
    quantity?: IntWithAggregatesFilter<"Transaction"> | number
    unitPrice?: FloatWithAggregatesFilter<"Transaction"> | number
    isPurchase?: BoolWithAggregatesFilter<"Transaction"> | boolean
    subtotal?: FloatWithAggregatesFilter<"Transaction"> | number
    createdById?: StringWithAggregatesFilter<"Transaction"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
  }

  export type StockFlowWhereInput = {
    AND?: StockFlowWhereInput | StockFlowWhereInput[]
    OR?: StockFlowWhereInput[]
    NOT?: StockFlowWhereInput | StockFlowWhereInput[]
    id?: StringFilter<"StockFlow"> | string
    itemId?: StringFilter<"StockFlow"> | string
    warehouseId?: StringFilter<"StockFlow"> | string
    transactionId?: StringFilter<"StockFlow"> | string
    direction?: EnumStockDirectionFilter<"StockFlow"> | $Enums.StockDirection
    qty?: IntFilter<"StockFlow"> | number
    unitCost?: FloatFilter<"StockFlow"> | number
    remainingQty?: IntFilter<"StockFlow"> | number
    createdAt?: DateTimeFilter<"StockFlow"> | Date | string
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
    warehouse?: XOR<WarehouseScalarRelationFilter, WarehouseWhereInput>
    transaction?: XOR<TransactionScalarRelationFilter, TransactionWhereInput>
  }

  export type StockFlowOrderByWithRelationInput = {
    id?: SortOrder
    itemId?: SortOrder
    warehouseId?: SortOrder
    transactionId?: SortOrder
    direction?: SortOrder
    qty?: SortOrder
    unitCost?: SortOrder
    remainingQty?: SortOrder
    createdAt?: SortOrder
    item?: ItemOrderByWithRelationInput
    warehouse?: WarehouseOrderByWithRelationInput
    transaction?: TransactionOrderByWithRelationInput
  }

  export type StockFlowWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StockFlowWhereInput | StockFlowWhereInput[]
    OR?: StockFlowWhereInput[]
    NOT?: StockFlowWhereInput | StockFlowWhereInput[]
    itemId?: StringFilter<"StockFlow"> | string
    warehouseId?: StringFilter<"StockFlow"> | string
    transactionId?: StringFilter<"StockFlow"> | string
    direction?: EnumStockDirectionFilter<"StockFlow"> | $Enums.StockDirection
    qty?: IntFilter<"StockFlow"> | number
    unitCost?: FloatFilter<"StockFlow"> | number
    remainingQty?: IntFilter<"StockFlow"> | number
    createdAt?: DateTimeFilter<"StockFlow"> | Date | string
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
    warehouse?: XOR<WarehouseScalarRelationFilter, WarehouseWhereInput>
    transaction?: XOR<TransactionScalarRelationFilter, TransactionWhereInput>
  }, "id">

  export type StockFlowOrderByWithAggregationInput = {
    id?: SortOrder
    itemId?: SortOrder
    warehouseId?: SortOrder
    transactionId?: SortOrder
    direction?: SortOrder
    qty?: SortOrder
    unitCost?: SortOrder
    remainingQty?: SortOrder
    createdAt?: SortOrder
    _count?: StockFlowCountOrderByAggregateInput
    _avg?: StockFlowAvgOrderByAggregateInput
    _max?: StockFlowMaxOrderByAggregateInput
    _min?: StockFlowMinOrderByAggregateInput
    _sum?: StockFlowSumOrderByAggregateInput
  }

  export type StockFlowScalarWhereWithAggregatesInput = {
    AND?: StockFlowScalarWhereWithAggregatesInput | StockFlowScalarWhereWithAggregatesInput[]
    OR?: StockFlowScalarWhereWithAggregatesInput[]
    NOT?: StockFlowScalarWhereWithAggregatesInput | StockFlowScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StockFlow"> | string
    itemId?: StringWithAggregatesFilter<"StockFlow"> | string
    warehouseId?: StringWithAggregatesFilter<"StockFlow"> | string
    transactionId?: StringWithAggregatesFilter<"StockFlow"> | string
    direction?: EnumStockDirectionWithAggregatesFilter<"StockFlow"> | $Enums.StockDirection
    qty?: IntWithAggregatesFilter<"StockFlow"> | number
    unitCost?: FloatWithAggregatesFilter<"StockFlow"> | number
    remainingQty?: IntWithAggregatesFilter<"StockFlow"> | number
    createdAt?: DateTimeWithAggregatesFilter<"StockFlow"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    fullName: string
    username: string
    email: string
    phone: string
    role: $Enums.Role
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    invoices?: InvoiceCreateNestedManyWithoutCreatedByInput
    transactions?: TransactionCreateNestedManyWithoutCreatedByInput
    priceHistories?: ItemPriceHistoryCreateNestedManyWithoutChangedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    fullName: string
    username: string
    email: string
    phone: string
    role: $Enums.Role
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    invoices?: InvoiceUncheckedCreateNestedManyWithoutCreatedByInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutCreatedByInput
    priceHistories?: ItemPriceHistoryUncheckedCreateNestedManyWithoutChangedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invoices?: InvoiceUpdateManyWithoutCreatedByNestedInput
    transactions?: TransactionUpdateManyWithoutCreatedByNestedInput
    priceHistories?: ItemPriceHistoryUpdateManyWithoutChangedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invoices?: InvoiceUncheckedUpdateManyWithoutCreatedByNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutCreatedByNestedInput
    priceHistories?: ItemPriceHistoryUncheckedUpdateManyWithoutChangedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    fullName: string
    username: string
    email: string
    phone: string
    role: $Enums.Role
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WarehouseCreateInput = {
    id?: string
    name: string
    address: string
    type: $Enums.WarehouseType
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    itemStocks?: ItemStockCreateNestedManyWithoutWarehouseInput
    transactions?: TransactionCreateNestedManyWithoutWarehouseInput
    stockFlows?: StockFlowCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseUncheckedCreateInput = {
    id?: string
    name: string
    address: string
    type: $Enums.WarehouseType
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    itemStocks?: ItemStockUncheckedCreateNestedManyWithoutWarehouseInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutWarehouseInput
    stockFlows?: StockFlowUncheckedCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    type?: EnumWarehouseTypeFieldUpdateOperationsInput | $Enums.WarehouseType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemStocks?: ItemStockUpdateManyWithoutWarehouseNestedInput
    transactions?: TransactionUpdateManyWithoutWarehouseNestedInput
    stockFlows?: StockFlowUpdateManyWithoutWarehouseNestedInput
  }

  export type WarehouseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    type?: EnumWarehouseTypeFieldUpdateOperationsInput | $Enums.WarehouseType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemStocks?: ItemStockUncheckedUpdateManyWithoutWarehouseNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutWarehouseNestedInput
    stockFlows?: StockFlowUncheckedUpdateManyWithoutWarehouseNestedInput
  }

  export type WarehouseCreateManyInput = {
    id?: string
    name: string
    address: string
    type: $Enums.WarehouseType
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type WarehouseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    type?: EnumWarehouseTypeFieldUpdateOperationsInput | $Enums.WarehouseType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WarehouseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    type?: EnumWarehouseTypeFieldUpdateOperationsInput | $Enums.WarehouseType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ItemCreateInput = {
    id?: string
    name: string
    currentPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    itemStocks?: ItemStockCreateNestedManyWithoutItemInput
    priceHistories?: ItemPriceHistoryCreateNestedManyWithoutItemInput
    transactions?: TransactionCreateNestedManyWithoutItemInput
    stockFlows?: StockFlowCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateInput = {
    id?: string
    name: string
    currentPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    itemStocks?: ItemStockUncheckedCreateNestedManyWithoutItemInput
    priceHistories?: ItemPriceHistoryUncheckedCreateNestedManyWithoutItemInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutItemInput
    stockFlows?: StockFlowUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    currentPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemStocks?: ItemStockUpdateManyWithoutItemNestedInput
    priceHistories?: ItemPriceHistoryUpdateManyWithoutItemNestedInput
    transactions?: TransactionUpdateManyWithoutItemNestedInput
    stockFlows?: StockFlowUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    currentPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemStocks?: ItemStockUncheckedUpdateManyWithoutItemNestedInput
    priceHistories?: ItemPriceHistoryUncheckedUpdateManyWithoutItemNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutItemNestedInput
    stockFlows?: StockFlowUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemCreateManyInput = {
    id?: string
    name: string
    currentPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    currentPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    currentPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ItemStockCreateInput = {
    id?: string
    stockQty: number
    createdAt?: Date | string
    updatedAt?: Date | string
    item: ItemCreateNestedOneWithoutItemStocksInput
    warehouse: WarehouseCreateNestedOneWithoutItemStocksInput
  }

  export type ItemStockUncheckedCreateInput = {
    id?: string
    itemId: string
    warehouseId: string
    stockQty: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemStockUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stockQty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    item?: ItemUpdateOneRequiredWithoutItemStocksNestedInput
    warehouse?: WarehouseUpdateOneRequiredWithoutItemStocksNestedInput
  }

  export type ItemStockUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    stockQty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemStockCreateManyInput = {
    id?: string
    itemId: string
    warehouseId: string
    stockQty: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemStockUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stockQty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemStockUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    stockQty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemPriceHistoryCreateInput = {
    id?: string
    price: number
    changedAt?: Date | string
    item: ItemCreateNestedOneWithoutPriceHistoriesInput
    changedBy: UserCreateNestedOneWithoutPriceHistoriesInput
  }

  export type ItemPriceHistoryUncheckedCreateInput = {
    id?: string
    itemId: string
    price: number
    changedAt?: Date | string
    userId: string
  }

  export type ItemPriceHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    item?: ItemUpdateOneRequiredWithoutPriceHistoriesNestedInput
    changedBy?: UserUpdateOneRequiredWithoutPriceHistoriesNestedInput
  }

  export type ItemPriceHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ItemPriceHistoryCreateManyInput = {
    id?: string
    itemId: string
    price: number
    changedAt?: Date | string
    userId: string
  }

  export type ItemPriceHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemPriceHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type InvoiceCreateInput = {
    id?: string
    invoiceCode: string
    transactionDate: Date | string
    paymentStatus: boolean
    buyer?: string | null
    paymentMethod: string
    createdAt?: Date | string
    createdBy: UserCreateNestedOneWithoutInvoicesInput
    transactions?: TransactionCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateInput = {
    id?: string
    invoiceCode: string
    transactionDate: Date | string
    paymentStatus: boolean
    buyer?: string | null
    paymentMethod: string
    createdById: string
    createdAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceCode?: StringFieldUpdateOperationsInput | string
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentStatus?: BoolFieldUpdateOperationsInput | boolean
    buyer?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutInvoicesNestedInput
    transactions?: TransactionUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceCode?: StringFieldUpdateOperationsInput | string
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentStatus?: BoolFieldUpdateOperationsInput | boolean
    buyer?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceCreateManyInput = {
    id?: string
    invoiceCode: string
    transactionDate: Date | string
    paymentStatus: boolean
    buyer?: string | null
    paymentMethod: string
    createdById: string
    createdAt?: Date | string
  }

  export type InvoiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceCode?: StringFieldUpdateOperationsInput | string
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentStatus?: BoolFieldUpdateOperationsInput | boolean
    buyer?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceCode?: StringFieldUpdateOperationsInput | string
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentStatus?: BoolFieldUpdateOperationsInput | boolean
    buyer?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateInput = {
    id?: string
    quantity: number
    unitPrice: number
    isPurchase: boolean
    subtotal: number
    createdAt?: Date | string
    invoice: InvoiceCreateNestedOneWithoutTransactionsInput
    item: ItemCreateNestedOneWithoutTransactionsInput
    warehouse: WarehouseCreateNestedOneWithoutTransactionsInput
    createdBy: UserCreateNestedOneWithoutTransactionsInput
    stockFlows?: StockFlowCreateNestedManyWithoutTransactionInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: string
    invoiceId: string
    itemId: string
    warehouseId: string
    quantity: number
    unitPrice: number
    isPurchase: boolean
    subtotal: number
    createdById: string
    createdAt?: Date | string
    stockFlows?: StockFlowUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    isPurchase?: BoolFieldUpdateOperationsInput | boolean
    subtotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice?: InvoiceUpdateOneRequiredWithoutTransactionsNestedInput
    item?: ItemUpdateOneRequiredWithoutTransactionsNestedInput
    warehouse?: WarehouseUpdateOneRequiredWithoutTransactionsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    stockFlows?: StockFlowUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    isPurchase?: BoolFieldUpdateOperationsInput | boolean
    subtotal?: FloatFieldUpdateOperationsInput | number
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stockFlows?: StockFlowUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionCreateManyInput = {
    id?: string
    invoiceId: string
    itemId: string
    warehouseId: string
    quantity: number
    unitPrice: number
    isPurchase: boolean
    subtotal: number
    createdById: string
    createdAt?: Date | string
  }

  export type TransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    isPurchase?: BoolFieldUpdateOperationsInput | boolean
    subtotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    isPurchase?: BoolFieldUpdateOperationsInput | boolean
    subtotal?: FloatFieldUpdateOperationsInput | number
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockFlowCreateInput = {
    id?: string
    direction: $Enums.StockDirection
    qty: number
    unitCost: number
    remainingQty: number
    createdAt?: Date | string
    item: ItemCreateNestedOneWithoutStockFlowsInput
    warehouse: WarehouseCreateNestedOneWithoutStockFlowsInput
    transaction: TransactionCreateNestedOneWithoutStockFlowsInput
  }

  export type StockFlowUncheckedCreateInput = {
    id?: string
    itemId: string
    warehouseId: string
    transactionId: string
    direction: $Enums.StockDirection
    qty: number
    unitCost: number
    remainingQty: number
    createdAt?: Date | string
  }

  export type StockFlowUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    direction?: EnumStockDirectionFieldUpdateOperationsInput | $Enums.StockDirection
    qty?: IntFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    remainingQty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    item?: ItemUpdateOneRequiredWithoutStockFlowsNestedInput
    warehouse?: WarehouseUpdateOneRequiredWithoutStockFlowsNestedInput
    transaction?: TransactionUpdateOneRequiredWithoutStockFlowsNestedInput
  }

  export type StockFlowUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    direction?: EnumStockDirectionFieldUpdateOperationsInput | $Enums.StockDirection
    qty?: IntFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    remainingQty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockFlowCreateManyInput = {
    id?: string
    itemId: string
    warehouseId: string
    transactionId: string
    direction: $Enums.StockDirection
    qty: number
    unitCost: number
    remainingQty: number
    createdAt?: Date | string
  }

  export type StockFlowUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    direction?: EnumStockDirectionFieldUpdateOperationsInput | $Enums.StockDirection
    qty?: IntFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    remainingQty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockFlowUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    direction?: EnumStockDirectionFieldUpdateOperationsInput | $Enums.StockDirection
    qty?: IntFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    remainingQty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type InvoiceListRelationFilter = {
    every?: InvoiceWhereInput
    some?: InvoiceWhereInput
    none?: InvoiceWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type ItemPriceHistoryListRelationFilter = {
    every?: ItemPriceHistoryWhereInput
    some?: ItemPriceHistoryWhereInput
    none?: ItemPriceHistoryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type InvoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ItemPriceHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumWarehouseTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.WarehouseType | EnumWarehouseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.WarehouseType[] | ListEnumWarehouseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WarehouseType[] | ListEnumWarehouseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumWarehouseTypeFilter<$PrismaModel> | $Enums.WarehouseType
  }

  export type ItemStockListRelationFilter = {
    every?: ItemStockWhereInput
    some?: ItemStockWhereInput
    none?: ItemStockWhereInput
  }

  export type StockFlowListRelationFilter = {
    every?: StockFlowWhereInput
    some?: StockFlowWhereInput
    none?: StockFlowWhereInput
  }

  export type ItemStockOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StockFlowOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WarehouseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type WarehouseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type WarehouseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type EnumWarehouseTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WarehouseType | EnumWarehouseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.WarehouseType[] | ListEnumWarehouseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WarehouseType[] | ListEnumWarehouseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumWarehouseTypeWithAggregatesFilter<$PrismaModel> | $Enums.WarehouseType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWarehouseTypeFilter<$PrismaModel>
    _max?: NestedEnumWarehouseTypeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    currentPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ItemAvgOrderByAggregateInput = {
    currentPrice?: SortOrder
  }

  export type ItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    currentPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    currentPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ItemSumOrderByAggregateInput = {
    currentPrice?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ItemScalarRelationFilter = {
    is?: ItemWhereInput
    isNot?: ItemWhereInput
  }

  export type WarehouseScalarRelationFilter = {
    is?: WarehouseWhereInput
    isNot?: WarehouseWhereInput
  }

  export type ItemStockItemIdWarehouseIdCompoundUniqueInput = {
    itemId: string
    warehouseId: string
  }

  export type ItemStockCountOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    warehouseId?: SortOrder
    stockQty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemStockAvgOrderByAggregateInput = {
    stockQty?: SortOrder
  }

  export type ItemStockMaxOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    warehouseId?: SortOrder
    stockQty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemStockMinOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    warehouseId?: SortOrder
    stockQty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemStockSumOrderByAggregateInput = {
    stockQty?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ItemPriceHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    price?: SortOrder
    changedAt?: SortOrder
    userId?: SortOrder
  }

  export type ItemPriceHistoryAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type ItemPriceHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    price?: SortOrder
    changedAt?: SortOrder
    userId?: SortOrder
  }

  export type ItemPriceHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    price?: SortOrder
    changedAt?: SortOrder
    userId?: SortOrder
  }

  export type ItemPriceHistorySumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type InvoiceCountOrderByAggregateInput = {
    id?: SortOrder
    invoiceCode?: SortOrder
    transactionDate?: SortOrder
    paymentStatus?: SortOrder
    buyer?: SortOrder
    paymentMethod?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
  }

  export type InvoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    invoiceCode?: SortOrder
    transactionDate?: SortOrder
    paymentStatus?: SortOrder
    buyer?: SortOrder
    paymentMethod?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
  }

  export type InvoiceMinOrderByAggregateInput = {
    id?: SortOrder
    invoiceCode?: SortOrder
    transactionDate?: SortOrder
    paymentStatus?: SortOrder
    buyer?: SortOrder
    paymentMethod?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type InvoiceScalarRelationFilter = {
    is?: InvoiceWhereInput
    isNot?: InvoiceWhereInput
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    itemId?: SortOrder
    warehouseId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    isPurchase?: SortOrder
    subtotal?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
    subtotal?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    itemId?: SortOrder
    warehouseId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    isPurchase?: SortOrder
    subtotal?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    itemId?: SortOrder
    warehouseId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    isPurchase?: SortOrder
    subtotal?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
    subtotal?: SortOrder
  }

  export type EnumStockDirectionFilter<$PrismaModel = never> = {
    equals?: $Enums.StockDirection | EnumStockDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.StockDirection[] | ListEnumStockDirectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.StockDirection[] | ListEnumStockDirectionFieldRefInput<$PrismaModel>
    not?: NestedEnumStockDirectionFilter<$PrismaModel> | $Enums.StockDirection
  }

  export type TransactionScalarRelationFilter = {
    is?: TransactionWhereInput
    isNot?: TransactionWhereInput
  }

  export type StockFlowCountOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    warehouseId?: SortOrder
    transactionId?: SortOrder
    direction?: SortOrder
    qty?: SortOrder
    unitCost?: SortOrder
    remainingQty?: SortOrder
    createdAt?: SortOrder
  }

  export type StockFlowAvgOrderByAggregateInput = {
    qty?: SortOrder
    unitCost?: SortOrder
    remainingQty?: SortOrder
  }

  export type StockFlowMaxOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    warehouseId?: SortOrder
    transactionId?: SortOrder
    direction?: SortOrder
    qty?: SortOrder
    unitCost?: SortOrder
    remainingQty?: SortOrder
    createdAt?: SortOrder
  }

  export type StockFlowMinOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    warehouseId?: SortOrder
    transactionId?: SortOrder
    direction?: SortOrder
    qty?: SortOrder
    unitCost?: SortOrder
    remainingQty?: SortOrder
    createdAt?: SortOrder
  }

  export type StockFlowSumOrderByAggregateInput = {
    qty?: SortOrder
    unitCost?: SortOrder
    remainingQty?: SortOrder
  }

  export type EnumStockDirectionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StockDirection | EnumStockDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.StockDirection[] | ListEnumStockDirectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.StockDirection[] | ListEnumStockDirectionFieldRefInput<$PrismaModel>
    not?: NestedEnumStockDirectionWithAggregatesFilter<$PrismaModel> | $Enums.StockDirection
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStockDirectionFilter<$PrismaModel>
    _max?: NestedEnumStockDirectionFilter<$PrismaModel>
  }

  export type InvoiceCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<InvoiceCreateWithoutCreatedByInput, InvoiceUncheckedCreateWithoutCreatedByInput> | InvoiceCreateWithoutCreatedByInput[] | InvoiceUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutCreatedByInput | InvoiceCreateOrConnectWithoutCreatedByInput[]
    createMany?: InvoiceCreateManyCreatedByInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<TransactionCreateWithoutCreatedByInput, TransactionUncheckedCreateWithoutCreatedByInput> | TransactionCreateWithoutCreatedByInput[] | TransactionUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCreatedByInput | TransactionCreateOrConnectWithoutCreatedByInput[]
    createMany?: TransactionCreateManyCreatedByInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type ItemPriceHistoryCreateNestedManyWithoutChangedByInput = {
    create?: XOR<ItemPriceHistoryCreateWithoutChangedByInput, ItemPriceHistoryUncheckedCreateWithoutChangedByInput> | ItemPriceHistoryCreateWithoutChangedByInput[] | ItemPriceHistoryUncheckedCreateWithoutChangedByInput[]
    connectOrCreate?: ItemPriceHistoryCreateOrConnectWithoutChangedByInput | ItemPriceHistoryCreateOrConnectWithoutChangedByInput[]
    createMany?: ItemPriceHistoryCreateManyChangedByInputEnvelope
    connect?: ItemPriceHistoryWhereUniqueInput | ItemPriceHistoryWhereUniqueInput[]
  }

  export type InvoiceUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<InvoiceCreateWithoutCreatedByInput, InvoiceUncheckedCreateWithoutCreatedByInput> | InvoiceCreateWithoutCreatedByInput[] | InvoiceUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutCreatedByInput | InvoiceCreateOrConnectWithoutCreatedByInput[]
    createMany?: InvoiceCreateManyCreatedByInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<TransactionCreateWithoutCreatedByInput, TransactionUncheckedCreateWithoutCreatedByInput> | TransactionCreateWithoutCreatedByInput[] | TransactionUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCreatedByInput | TransactionCreateOrConnectWithoutCreatedByInput[]
    createMany?: TransactionCreateManyCreatedByInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type ItemPriceHistoryUncheckedCreateNestedManyWithoutChangedByInput = {
    create?: XOR<ItemPriceHistoryCreateWithoutChangedByInput, ItemPriceHistoryUncheckedCreateWithoutChangedByInput> | ItemPriceHistoryCreateWithoutChangedByInput[] | ItemPriceHistoryUncheckedCreateWithoutChangedByInput[]
    connectOrCreate?: ItemPriceHistoryCreateOrConnectWithoutChangedByInput | ItemPriceHistoryCreateOrConnectWithoutChangedByInput[]
    createMany?: ItemPriceHistoryCreateManyChangedByInputEnvelope
    connect?: ItemPriceHistoryWhereUniqueInput | ItemPriceHistoryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type InvoiceUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<InvoiceCreateWithoutCreatedByInput, InvoiceUncheckedCreateWithoutCreatedByInput> | InvoiceCreateWithoutCreatedByInput[] | InvoiceUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutCreatedByInput | InvoiceCreateOrConnectWithoutCreatedByInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutCreatedByInput | InvoiceUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: InvoiceCreateManyCreatedByInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutCreatedByInput | InvoiceUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutCreatedByInput | InvoiceUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<TransactionCreateWithoutCreatedByInput, TransactionUncheckedCreateWithoutCreatedByInput> | TransactionCreateWithoutCreatedByInput[] | TransactionUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCreatedByInput | TransactionCreateOrConnectWithoutCreatedByInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutCreatedByInput | TransactionUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: TransactionCreateManyCreatedByInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutCreatedByInput | TransactionUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutCreatedByInput | TransactionUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type ItemPriceHistoryUpdateManyWithoutChangedByNestedInput = {
    create?: XOR<ItemPriceHistoryCreateWithoutChangedByInput, ItemPriceHistoryUncheckedCreateWithoutChangedByInput> | ItemPriceHistoryCreateWithoutChangedByInput[] | ItemPriceHistoryUncheckedCreateWithoutChangedByInput[]
    connectOrCreate?: ItemPriceHistoryCreateOrConnectWithoutChangedByInput | ItemPriceHistoryCreateOrConnectWithoutChangedByInput[]
    upsert?: ItemPriceHistoryUpsertWithWhereUniqueWithoutChangedByInput | ItemPriceHistoryUpsertWithWhereUniqueWithoutChangedByInput[]
    createMany?: ItemPriceHistoryCreateManyChangedByInputEnvelope
    set?: ItemPriceHistoryWhereUniqueInput | ItemPriceHistoryWhereUniqueInput[]
    disconnect?: ItemPriceHistoryWhereUniqueInput | ItemPriceHistoryWhereUniqueInput[]
    delete?: ItemPriceHistoryWhereUniqueInput | ItemPriceHistoryWhereUniqueInput[]
    connect?: ItemPriceHistoryWhereUniqueInput | ItemPriceHistoryWhereUniqueInput[]
    update?: ItemPriceHistoryUpdateWithWhereUniqueWithoutChangedByInput | ItemPriceHistoryUpdateWithWhereUniqueWithoutChangedByInput[]
    updateMany?: ItemPriceHistoryUpdateManyWithWhereWithoutChangedByInput | ItemPriceHistoryUpdateManyWithWhereWithoutChangedByInput[]
    deleteMany?: ItemPriceHistoryScalarWhereInput | ItemPriceHistoryScalarWhereInput[]
  }

  export type InvoiceUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<InvoiceCreateWithoutCreatedByInput, InvoiceUncheckedCreateWithoutCreatedByInput> | InvoiceCreateWithoutCreatedByInput[] | InvoiceUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutCreatedByInput | InvoiceCreateOrConnectWithoutCreatedByInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutCreatedByInput | InvoiceUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: InvoiceCreateManyCreatedByInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutCreatedByInput | InvoiceUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutCreatedByInput | InvoiceUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<TransactionCreateWithoutCreatedByInput, TransactionUncheckedCreateWithoutCreatedByInput> | TransactionCreateWithoutCreatedByInput[] | TransactionUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCreatedByInput | TransactionCreateOrConnectWithoutCreatedByInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutCreatedByInput | TransactionUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: TransactionCreateManyCreatedByInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutCreatedByInput | TransactionUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutCreatedByInput | TransactionUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type ItemPriceHistoryUncheckedUpdateManyWithoutChangedByNestedInput = {
    create?: XOR<ItemPriceHistoryCreateWithoutChangedByInput, ItemPriceHistoryUncheckedCreateWithoutChangedByInput> | ItemPriceHistoryCreateWithoutChangedByInput[] | ItemPriceHistoryUncheckedCreateWithoutChangedByInput[]
    connectOrCreate?: ItemPriceHistoryCreateOrConnectWithoutChangedByInput | ItemPriceHistoryCreateOrConnectWithoutChangedByInput[]
    upsert?: ItemPriceHistoryUpsertWithWhereUniqueWithoutChangedByInput | ItemPriceHistoryUpsertWithWhereUniqueWithoutChangedByInput[]
    createMany?: ItemPriceHistoryCreateManyChangedByInputEnvelope
    set?: ItemPriceHistoryWhereUniqueInput | ItemPriceHistoryWhereUniqueInput[]
    disconnect?: ItemPriceHistoryWhereUniqueInput | ItemPriceHistoryWhereUniqueInput[]
    delete?: ItemPriceHistoryWhereUniqueInput | ItemPriceHistoryWhereUniqueInput[]
    connect?: ItemPriceHistoryWhereUniqueInput | ItemPriceHistoryWhereUniqueInput[]
    update?: ItemPriceHistoryUpdateWithWhereUniqueWithoutChangedByInput | ItemPriceHistoryUpdateWithWhereUniqueWithoutChangedByInput[]
    updateMany?: ItemPriceHistoryUpdateManyWithWhereWithoutChangedByInput | ItemPriceHistoryUpdateManyWithWhereWithoutChangedByInput[]
    deleteMany?: ItemPriceHistoryScalarWhereInput | ItemPriceHistoryScalarWhereInput[]
  }

  export type ItemStockCreateNestedManyWithoutWarehouseInput = {
    create?: XOR<ItemStockCreateWithoutWarehouseInput, ItemStockUncheckedCreateWithoutWarehouseInput> | ItemStockCreateWithoutWarehouseInput[] | ItemStockUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: ItemStockCreateOrConnectWithoutWarehouseInput | ItemStockCreateOrConnectWithoutWarehouseInput[]
    createMany?: ItemStockCreateManyWarehouseInputEnvelope
    connect?: ItemStockWhereUniqueInput | ItemStockWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutWarehouseInput = {
    create?: XOR<TransactionCreateWithoutWarehouseInput, TransactionUncheckedCreateWithoutWarehouseInput> | TransactionCreateWithoutWarehouseInput[] | TransactionUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutWarehouseInput | TransactionCreateOrConnectWithoutWarehouseInput[]
    createMany?: TransactionCreateManyWarehouseInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type StockFlowCreateNestedManyWithoutWarehouseInput = {
    create?: XOR<StockFlowCreateWithoutWarehouseInput, StockFlowUncheckedCreateWithoutWarehouseInput> | StockFlowCreateWithoutWarehouseInput[] | StockFlowUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: StockFlowCreateOrConnectWithoutWarehouseInput | StockFlowCreateOrConnectWithoutWarehouseInput[]
    createMany?: StockFlowCreateManyWarehouseInputEnvelope
    connect?: StockFlowWhereUniqueInput | StockFlowWhereUniqueInput[]
  }

  export type ItemStockUncheckedCreateNestedManyWithoutWarehouseInput = {
    create?: XOR<ItemStockCreateWithoutWarehouseInput, ItemStockUncheckedCreateWithoutWarehouseInput> | ItemStockCreateWithoutWarehouseInput[] | ItemStockUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: ItemStockCreateOrConnectWithoutWarehouseInput | ItemStockCreateOrConnectWithoutWarehouseInput[]
    createMany?: ItemStockCreateManyWarehouseInputEnvelope
    connect?: ItemStockWhereUniqueInput | ItemStockWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutWarehouseInput = {
    create?: XOR<TransactionCreateWithoutWarehouseInput, TransactionUncheckedCreateWithoutWarehouseInput> | TransactionCreateWithoutWarehouseInput[] | TransactionUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutWarehouseInput | TransactionCreateOrConnectWithoutWarehouseInput[]
    createMany?: TransactionCreateManyWarehouseInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type StockFlowUncheckedCreateNestedManyWithoutWarehouseInput = {
    create?: XOR<StockFlowCreateWithoutWarehouseInput, StockFlowUncheckedCreateWithoutWarehouseInput> | StockFlowCreateWithoutWarehouseInput[] | StockFlowUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: StockFlowCreateOrConnectWithoutWarehouseInput | StockFlowCreateOrConnectWithoutWarehouseInput[]
    createMany?: StockFlowCreateManyWarehouseInputEnvelope
    connect?: StockFlowWhereUniqueInput | StockFlowWhereUniqueInput[]
  }

  export type EnumWarehouseTypeFieldUpdateOperationsInput = {
    set?: $Enums.WarehouseType
  }

  export type ItemStockUpdateManyWithoutWarehouseNestedInput = {
    create?: XOR<ItemStockCreateWithoutWarehouseInput, ItemStockUncheckedCreateWithoutWarehouseInput> | ItemStockCreateWithoutWarehouseInput[] | ItemStockUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: ItemStockCreateOrConnectWithoutWarehouseInput | ItemStockCreateOrConnectWithoutWarehouseInput[]
    upsert?: ItemStockUpsertWithWhereUniqueWithoutWarehouseInput | ItemStockUpsertWithWhereUniqueWithoutWarehouseInput[]
    createMany?: ItemStockCreateManyWarehouseInputEnvelope
    set?: ItemStockWhereUniqueInput | ItemStockWhereUniqueInput[]
    disconnect?: ItemStockWhereUniqueInput | ItemStockWhereUniqueInput[]
    delete?: ItemStockWhereUniqueInput | ItemStockWhereUniqueInput[]
    connect?: ItemStockWhereUniqueInput | ItemStockWhereUniqueInput[]
    update?: ItemStockUpdateWithWhereUniqueWithoutWarehouseInput | ItemStockUpdateWithWhereUniqueWithoutWarehouseInput[]
    updateMany?: ItemStockUpdateManyWithWhereWithoutWarehouseInput | ItemStockUpdateManyWithWhereWithoutWarehouseInput[]
    deleteMany?: ItemStockScalarWhereInput | ItemStockScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutWarehouseNestedInput = {
    create?: XOR<TransactionCreateWithoutWarehouseInput, TransactionUncheckedCreateWithoutWarehouseInput> | TransactionCreateWithoutWarehouseInput[] | TransactionUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutWarehouseInput | TransactionCreateOrConnectWithoutWarehouseInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutWarehouseInput | TransactionUpsertWithWhereUniqueWithoutWarehouseInput[]
    createMany?: TransactionCreateManyWarehouseInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutWarehouseInput | TransactionUpdateWithWhereUniqueWithoutWarehouseInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutWarehouseInput | TransactionUpdateManyWithWhereWithoutWarehouseInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type StockFlowUpdateManyWithoutWarehouseNestedInput = {
    create?: XOR<StockFlowCreateWithoutWarehouseInput, StockFlowUncheckedCreateWithoutWarehouseInput> | StockFlowCreateWithoutWarehouseInput[] | StockFlowUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: StockFlowCreateOrConnectWithoutWarehouseInput | StockFlowCreateOrConnectWithoutWarehouseInput[]
    upsert?: StockFlowUpsertWithWhereUniqueWithoutWarehouseInput | StockFlowUpsertWithWhereUniqueWithoutWarehouseInput[]
    createMany?: StockFlowCreateManyWarehouseInputEnvelope
    set?: StockFlowWhereUniqueInput | StockFlowWhereUniqueInput[]
    disconnect?: StockFlowWhereUniqueInput | StockFlowWhereUniqueInput[]
    delete?: StockFlowWhereUniqueInput | StockFlowWhereUniqueInput[]
    connect?: StockFlowWhereUniqueInput | StockFlowWhereUniqueInput[]
    update?: StockFlowUpdateWithWhereUniqueWithoutWarehouseInput | StockFlowUpdateWithWhereUniqueWithoutWarehouseInput[]
    updateMany?: StockFlowUpdateManyWithWhereWithoutWarehouseInput | StockFlowUpdateManyWithWhereWithoutWarehouseInput[]
    deleteMany?: StockFlowScalarWhereInput | StockFlowScalarWhereInput[]
  }

  export type ItemStockUncheckedUpdateManyWithoutWarehouseNestedInput = {
    create?: XOR<ItemStockCreateWithoutWarehouseInput, ItemStockUncheckedCreateWithoutWarehouseInput> | ItemStockCreateWithoutWarehouseInput[] | ItemStockUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: ItemStockCreateOrConnectWithoutWarehouseInput | ItemStockCreateOrConnectWithoutWarehouseInput[]
    upsert?: ItemStockUpsertWithWhereUniqueWithoutWarehouseInput | ItemStockUpsertWithWhereUniqueWithoutWarehouseInput[]
    createMany?: ItemStockCreateManyWarehouseInputEnvelope
    set?: ItemStockWhereUniqueInput | ItemStockWhereUniqueInput[]
    disconnect?: ItemStockWhereUniqueInput | ItemStockWhereUniqueInput[]
    delete?: ItemStockWhereUniqueInput | ItemStockWhereUniqueInput[]
    connect?: ItemStockWhereUniqueInput | ItemStockWhereUniqueInput[]
    update?: ItemStockUpdateWithWhereUniqueWithoutWarehouseInput | ItemStockUpdateWithWhereUniqueWithoutWarehouseInput[]
    updateMany?: ItemStockUpdateManyWithWhereWithoutWarehouseInput | ItemStockUpdateManyWithWhereWithoutWarehouseInput[]
    deleteMany?: ItemStockScalarWhereInput | ItemStockScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutWarehouseNestedInput = {
    create?: XOR<TransactionCreateWithoutWarehouseInput, TransactionUncheckedCreateWithoutWarehouseInput> | TransactionCreateWithoutWarehouseInput[] | TransactionUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutWarehouseInput | TransactionCreateOrConnectWithoutWarehouseInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutWarehouseInput | TransactionUpsertWithWhereUniqueWithoutWarehouseInput[]
    createMany?: TransactionCreateManyWarehouseInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutWarehouseInput | TransactionUpdateWithWhereUniqueWithoutWarehouseInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutWarehouseInput | TransactionUpdateManyWithWhereWithoutWarehouseInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type StockFlowUncheckedUpdateManyWithoutWarehouseNestedInput = {
    create?: XOR<StockFlowCreateWithoutWarehouseInput, StockFlowUncheckedCreateWithoutWarehouseInput> | StockFlowCreateWithoutWarehouseInput[] | StockFlowUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: StockFlowCreateOrConnectWithoutWarehouseInput | StockFlowCreateOrConnectWithoutWarehouseInput[]
    upsert?: StockFlowUpsertWithWhereUniqueWithoutWarehouseInput | StockFlowUpsertWithWhereUniqueWithoutWarehouseInput[]
    createMany?: StockFlowCreateManyWarehouseInputEnvelope
    set?: StockFlowWhereUniqueInput | StockFlowWhereUniqueInput[]
    disconnect?: StockFlowWhereUniqueInput | StockFlowWhereUniqueInput[]
    delete?: StockFlowWhereUniqueInput | StockFlowWhereUniqueInput[]
    connect?: StockFlowWhereUniqueInput | StockFlowWhereUniqueInput[]
    update?: StockFlowUpdateWithWhereUniqueWithoutWarehouseInput | StockFlowUpdateWithWhereUniqueWithoutWarehouseInput[]
    updateMany?: StockFlowUpdateManyWithWhereWithoutWarehouseInput | StockFlowUpdateManyWithWhereWithoutWarehouseInput[]
    deleteMany?: StockFlowScalarWhereInput | StockFlowScalarWhereInput[]
  }

  export type ItemStockCreateNestedManyWithoutItemInput = {
    create?: XOR<ItemStockCreateWithoutItemInput, ItemStockUncheckedCreateWithoutItemInput> | ItemStockCreateWithoutItemInput[] | ItemStockUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemStockCreateOrConnectWithoutItemInput | ItemStockCreateOrConnectWithoutItemInput[]
    createMany?: ItemStockCreateManyItemInputEnvelope
    connect?: ItemStockWhereUniqueInput | ItemStockWhereUniqueInput[]
  }

  export type ItemPriceHistoryCreateNestedManyWithoutItemInput = {
    create?: XOR<ItemPriceHistoryCreateWithoutItemInput, ItemPriceHistoryUncheckedCreateWithoutItemInput> | ItemPriceHistoryCreateWithoutItemInput[] | ItemPriceHistoryUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemPriceHistoryCreateOrConnectWithoutItemInput | ItemPriceHistoryCreateOrConnectWithoutItemInput[]
    createMany?: ItemPriceHistoryCreateManyItemInputEnvelope
    connect?: ItemPriceHistoryWhereUniqueInput | ItemPriceHistoryWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutItemInput = {
    create?: XOR<TransactionCreateWithoutItemInput, TransactionUncheckedCreateWithoutItemInput> | TransactionCreateWithoutItemInput[] | TransactionUncheckedCreateWithoutItemInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutItemInput | TransactionCreateOrConnectWithoutItemInput[]
    createMany?: TransactionCreateManyItemInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type StockFlowCreateNestedManyWithoutItemInput = {
    create?: XOR<StockFlowCreateWithoutItemInput, StockFlowUncheckedCreateWithoutItemInput> | StockFlowCreateWithoutItemInput[] | StockFlowUncheckedCreateWithoutItemInput[]
    connectOrCreate?: StockFlowCreateOrConnectWithoutItemInput | StockFlowCreateOrConnectWithoutItemInput[]
    createMany?: StockFlowCreateManyItemInputEnvelope
    connect?: StockFlowWhereUniqueInput | StockFlowWhereUniqueInput[]
  }

  export type ItemStockUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<ItemStockCreateWithoutItemInput, ItemStockUncheckedCreateWithoutItemInput> | ItemStockCreateWithoutItemInput[] | ItemStockUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemStockCreateOrConnectWithoutItemInput | ItemStockCreateOrConnectWithoutItemInput[]
    createMany?: ItemStockCreateManyItemInputEnvelope
    connect?: ItemStockWhereUniqueInput | ItemStockWhereUniqueInput[]
  }

  export type ItemPriceHistoryUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<ItemPriceHistoryCreateWithoutItemInput, ItemPriceHistoryUncheckedCreateWithoutItemInput> | ItemPriceHistoryCreateWithoutItemInput[] | ItemPriceHistoryUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemPriceHistoryCreateOrConnectWithoutItemInput | ItemPriceHistoryCreateOrConnectWithoutItemInput[]
    createMany?: ItemPriceHistoryCreateManyItemInputEnvelope
    connect?: ItemPriceHistoryWhereUniqueInput | ItemPriceHistoryWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<TransactionCreateWithoutItemInput, TransactionUncheckedCreateWithoutItemInput> | TransactionCreateWithoutItemInput[] | TransactionUncheckedCreateWithoutItemInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutItemInput | TransactionCreateOrConnectWithoutItemInput[]
    createMany?: TransactionCreateManyItemInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type StockFlowUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<StockFlowCreateWithoutItemInput, StockFlowUncheckedCreateWithoutItemInput> | StockFlowCreateWithoutItemInput[] | StockFlowUncheckedCreateWithoutItemInput[]
    connectOrCreate?: StockFlowCreateOrConnectWithoutItemInput | StockFlowCreateOrConnectWithoutItemInput[]
    createMany?: StockFlowCreateManyItemInputEnvelope
    connect?: StockFlowWhereUniqueInput | StockFlowWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ItemStockUpdateManyWithoutItemNestedInput = {
    create?: XOR<ItemStockCreateWithoutItemInput, ItemStockUncheckedCreateWithoutItemInput> | ItemStockCreateWithoutItemInput[] | ItemStockUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemStockCreateOrConnectWithoutItemInput | ItemStockCreateOrConnectWithoutItemInput[]
    upsert?: ItemStockUpsertWithWhereUniqueWithoutItemInput | ItemStockUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: ItemStockCreateManyItemInputEnvelope
    set?: ItemStockWhereUniqueInput | ItemStockWhereUniqueInput[]
    disconnect?: ItemStockWhereUniqueInput | ItemStockWhereUniqueInput[]
    delete?: ItemStockWhereUniqueInput | ItemStockWhereUniqueInput[]
    connect?: ItemStockWhereUniqueInput | ItemStockWhereUniqueInput[]
    update?: ItemStockUpdateWithWhereUniqueWithoutItemInput | ItemStockUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: ItemStockUpdateManyWithWhereWithoutItemInput | ItemStockUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: ItemStockScalarWhereInput | ItemStockScalarWhereInput[]
  }

  export type ItemPriceHistoryUpdateManyWithoutItemNestedInput = {
    create?: XOR<ItemPriceHistoryCreateWithoutItemInput, ItemPriceHistoryUncheckedCreateWithoutItemInput> | ItemPriceHistoryCreateWithoutItemInput[] | ItemPriceHistoryUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemPriceHistoryCreateOrConnectWithoutItemInput | ItemPriceHistoryCreateOrConnectWithoutItemInput[]
    upsert?: ItemPriceHistoryUpsertWithWhereUniqueWithoutItemInput | ItemPriceHistoryUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: ItemPriceHistoryCreateManyItemInputEnvelope
    set?: ItemPriceHistoryWhereUniqueInput | ItemPriceHistoryWhereUniqueInput[]
    disconnect?: ItemPriceHistoryWhereUniqueInput | ItemPriceHistoryWhereUniqueInput[]
    delete?: ItemPriceHistoryWhereUniqueInput | ItemPriceHistoryWhereUniqueInput[]
    connect?: ItemPriceHistoryWhereUniqueInput | ItemPriceHistoryWhereUniqueInput[]
    update?: ItemPriceHistoryUpdateWithWhereUniqueWithoutItemInput | ItemPriceHistoryUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: ItemPriceHistoryUpdateManyWithWhereWithoutItemInput | ItemPriceHistoryUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: ItemPriceHistoryScalarWhereInput | ItemPriceHistoryScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutItemNestedInput = {
    create?: XOR<TransactionCreateWithoutItemInput, TransactionUncheckedCreateWithoutItemInput> | TransactionCreateWithoutItemInput[] | TransactionUncheckedCreateWithoutItemInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutItemInput | TransactionCreateOrConnectWithoutItemInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutItemInput | TransactionUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: TransactionCreateManyItemInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutItemInput | TransactionUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutItemInput | TransactionUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type StockFlowUpdateManyWithoutItemNestedInput = {
    create?: XOR<StockFlowCreateWithoutItemInput, StockFlowUncheckedCreateWithoutItemInput> | StockFlowCreateWithoutItemInput[] | StockFlowUncheckedCreateWithoutItemInput[]
    connectOrCreate?: StockFlowCreateOrConnectWithoutItemInput | StockFlowCreateOrConnectWithoutItemInput[]
    upsert?: StockFlowUpsertWithWhereUniqueWithoutItemInput | StockFlowUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: StockFlowCreateManyItemInputEnvelope
    set?: StockFlowWhereUniqueInput | StockFlowWhereUniqueInput[]
    disconnect?: StockFlowWhereUniqueInput | StockFlowWhereUniqueInput[]
    delete?: StockFlowWhereUniqueInput | StockFlowWhereUniqueInput[]
    connect?: StockFlowWhereUniqueInput | StockFlowWhereUniqueInput[]
    update?: StockFlowUpdateWithWhereUniqueWithoutItemInput | StockFlowUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: StockFlowUpdateManyWithWhereWithoutItemInput | StockFlowUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: StockFlowScalarWhereInput | StockFlowScalarWhereInput[]
  }

  export type ItemStockUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<ItemStockCreateWithoutItemInput, ItemStockUncheckedCreateWithoutItemInput> | ItemStockCreateWithoutItemInput[] | ItemStockUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemStockCreateOrConnectWithoutItemInput | ItemStockCreateOrConnectWithoutItemInput[]
    upsert?: ItemStockUpsertWithWhereUniqueWithoutItemInput | ItemStockUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: ItemStockCreateManyItemInputEnvelope
    set?: ItemStockWhereUniqueInput | ItemStockWhereUniqueInput[]
    disconnect?: ItemStockWhereUniqueInput | ItemStockWhereUniqueInput[]
    delete?: ItemStockWhereUniqueInput | ItemStockWhereUniqueInput[]
    connect?: ItemStockWhereUniqueInput | ItemStockWhereUniqueInput[]
    update?: ItemStockUpdateWithWhereUniqueWithoutItemInput | ItemStockUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: ItemStockUpdateManyWithWhereWithoutItemInput | ItemStockUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: ItemStockScalarWhereInput | ItemStockScalarWhereInput[]
  }

  export type ItemPriceHistoryUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<ItemPriceHistoryCreateWithoutItemInput, ItemPriceHistoryUncheckedCreateWithoutItemInput> | ItemPriceHistoryCreateWithoutItemInput[] | ItemPriceHistoryUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemPriceHistoryCreateOrConnectWithoutItemInput | ItemPriceHistoryCreateOrConnectWithoutItemInput[]
    upsert?: ItemPriceHistoryUpsertWithWhereUniqueWithoutItemInput | ItemPriceHistoryUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: ItemPriceHistoryCreateManyItemInputEnvelope
    set?: ItemPriceHistoryWhereUniqueInput | ItemPriceHistoryWhereUniqueInput[]
    disconnect?: ItemPriceHistoryWhereUniqueInput | ItemPriceHistoryWhereUniqueInput[]
    delete?: ItemPriceHistoryWhereUniqueInput | ItemPriceHistoryWhereUniqueInput[]
    connect?: ItemPriceHistoryWhereUniqueInput | ItemPriceHistoryWhereUniqueInput[]
    update?: ItemPriceHistoryUpdateWithWhereUniqueWithoutItemInput | ItemPriceHistoryUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: ItemPriceHistoryUpdateManyWithWhereWithoutItemInput | ItemPriceHistoryUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: ItemPriceHistoryScalarWhereInput | ItemPriceHistoryScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<TransactionCreateWithoutItemInput, TransactionUncheckedCreateWithoutItemInput> | TransactionCreateWithoutItemInput[] | TransactionUncheckedCreateWithoutItemInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutItemInput | TransactionCreateOrConnectWithoutItemInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutItemInput | TransactionUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: TransactionCreateManyItemInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutItemInput | TransactionUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutItemInput | TransactionUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type StockFlowUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<StockFlowCreateWithoutItemInput, StockFlowUncheckedCreateWithoutItemInput> | StockFlowCreateWithoutItemInput[] | StockFlowUncheckedCreateWithoutItemInput[]
    connectOrCreate?: StockFlowCreateOrConnectWithoutItemInput | StockFlowCreateOrConnectWithoutItemInput[]
    upsert?: StockFlowUpsertWithWhereUniqueWithoutItemInput | StockFlowUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: StockFlowCreateManyItemInputEnvelope
    set?: StockFlowWhereUniqueInput | StockFlowWhereUniqueInput[]
    disconnect?: StockFlowWhereUniqueInput | StockFlowWhereUniqueInput[]
    delete?: StockFlowWhereUniqueInput | StockFlowWhereUniqueInput[]
    connect?: StockFlowWhereUniqueInput | StockFlowWhereUniqueInput[]
    update?: StockFlowUpdateWithWhereUniqueWithoutItemInput | StockFlowUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: StockFlowUpdateManyWithWhereWithoutItemInput | StockFlowUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: StockFlowScalarWhereInput | StockFlowScalarWhereInput[]
  }

  export type ItemCreateNestedOneWithoutItemStocksInput = {
    create?: XOR<ItemCreateWithoutItemStocksInput, ItemUncheckedCreateWithoutItemStocksInput>
    connectOrCreate?: ItemCreateOrConnectWithoutItemStocksInput
    connect?: ItemWhereUniqueInput
  }

  export type WarehouseCreateNestedOneWithoutItemStocksInput = {
    create?: XOR<WarehouseCreateWithoutItemStocksInput, WarehouseUncheckedCreateWithoutItemStocksInput>
    connectOrCreate?: WarehouseCreateOrConnectWithoutItemStocksInput
    connect?: WarehouseWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ItemUpdateOneRequiredWithoutItemStocksNestedInput = {
    create?: XOR<ItemCreateWithoutItemStocksInput, ItemUncheckedCreateWithoutItemStocksInput>
    connectOrCreate?: ItemCreateOrConnectWithoutItemStocksInput
    upsert?: ItemUpsertWithoutItemStocksInput
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutItemStocksInput, ItemUpdateWithoutItemStocksInput>, ItemUncheckedUpdateWithoutItemStocksInput>
  }

  export type WarehouseUpdateOneRequiredWithoutItemStocksNestedInput = {
    create?: XOR<WarehouseCreateWithoutItemStocksInput, WarehouseUncheckedCreateWithoutItemStocksInput>
    connectOrCreate?: WarehouseCreateOrConnectWithoutItemStocksInput
    upsert?: WarehouseUpsertWithoutItemStocksInput
    connect?: WarehouseWhereUniqueInput
    update?: XOR<XOR<WarehouseUpdateToOneWithWhereWithoutItemStocksInput, WarehouseUpdateWithoutItemStocksInput>, WarehouseUncheckedUpdateWithoutItemStocksInput>
  }

  export type ItemCreateNestedOneWithoutPriceHistoriesInput = {
    create?: XOR<ItemCreateWithoutPriceHistoriesInput, ItemUncheckedCreateWithoutPriceHistoriesInput>
    connectOrCreate?: ItemCreateOrConnectWithoutPriceHistoriesInput
    connect?: ItemWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPriceHistoriesInput = {
    create?: XOR<UserCreateWithoutPriceHistoriesInput, UserUncheckedCreateWithoutPriceHistoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPriceHistoriesInput
    connect?: UserWhereUniqueInput
  }

  export type ItemUpdateOneRequiredWithoutPriceHistoriesNestedInput = {
    create?: XOR<ItemCreateWithoutPriceHistoriesInput, ItemUncheckedCreateWithoutPriceHistoriesInput>
    connectOrCreate?: ItemCreateOrConnectWithoutPriceHistoriesInput
    upsert?: ItemUpsertWithoutPriceHistoriesInput
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutPriceHistoriesInput, ItemUpdateWithoutPriceHistoriesInput>, ItemUncheckedUpdateWithoutPriceHistoriesInput>
  }

  export type UserUpdateOneRequiredWithoutPriceHistoriesNestedInput = {
    create?: XOR<UserCreateWithoutPriceHistoriesInput, UserUncheckedCreateWithoutPriceHistoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPriceHistoriesInput
    upsert?: UserUpsertWithoutPriceHistoriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPriceHistoriesInput, UserUpdateWithoutPriceHistoriesInput>, UserUncheckedUpdateWithoutPriceHistoriesInput>
  }

  export type UserCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<UserCreateWithoutInvoicesInput, UserUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvoicesInput
    connect?: UserWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<TransactionCreateWithoutInvoiceInput, TransactionUncheckedCreateWithoutInvoiceInput> | TransactionCreateWithoutInvoiceInput[] | TransactionUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutInvoiceInput | TransactionCreateOrConnectWithoutInvoiceInput[]
    createMany?: TransactionCreateManyInvoiceInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<TransactionCreateWithoutInvoiceInput, TransactionUncheckedCreateWithoutInvoiceInput> | TransactionCreateWithoutInvoiceInput[] | TransactionUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutInvoiceInput | TransactionCreateOrConnectWithoutInvoiceInput[]
    createMany?: TransactionCreateManyInvoiceInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutInvoicesNestedInput = {
    create?: XOR<UserCreateWithoutInvoicesInput, UserUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvoicesInput
    upsert?: UserUpsertWithoutInvoicesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInvoicesInput, UserUpdateWithoutInvoicesInput>, UserUncheckedUpdateWithoutInvoicesInput>
  }

  export type TransactionUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<TransactionCreateWithoutInvoiceInput, TransactionUncheckedCreateWithoutInvoiceInput> | TransactionCreateWithoutInvoiceInput[] | TransactionUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutInvoiceInput | TransactionCreateOrConnectWithoutInvoiceInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutInvoiceInput | TransactionUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: TransactionCreateManyInvoiceInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutInvoiceInput | TransactionUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutInvoiceInput | TransactionUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<TransactionCreateWithoutInvoiceInput, TransactionUncheckedCreateWithoutInvoiceInput> | TransactionCreateWithoutInvoiceInput[] | TransactionUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutInvoiceInput | TransactionCreateOrConnectWithoutInvoiceInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutInvoiceInput | TransactionUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: TransactionCreateManyInvoiceInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutInvoiceInput | TransactionUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutInvoiceInput | TransactionUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type InvoiceCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<InvoiceCreateWithoutTransactionsInput, InvoiceUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutTransactionsInput
    connect?: InvoiceWhereUniqueInput
  }

  export type ItemCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<ItemCreateWithoutTransactionsInput, ItemUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: ItemCreateOrConnectWithoutTransactionsInput
    connect?: ItemWhereUniqueInput
  }

  export type WarehouseCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<WarehouseCreateWithoutTransactionsInput, WarehouseUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: WarehouseCreateOrConnectWithoutTransactionsInput
    connect?: WarehouseWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type StockFlowCreateNestedManyWithoutTransactionInput = {
    create?: XOR<StockFlowCreateWithoutTransactionInput, StockFlowUncheckedCreateWithoutTransactionInput> | StockFlowCreateWithoutTransactionInput[] | StockFlowUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: StockFlowCreateOrConnectWithoutTransactionInput | StockFlowCreateOrConnectWithoutTransactionInput[]
    createMany?: StockFlowCreateManyTransactionInputEnvelope
    connect?: StockFlowWhereUniqueInput | StockFlowWhereUniqueInput[]
  }

  export type StockFlowUncheckedCreateNestedManyWithoutTransactionInput = {
    create?: XOR<StockFlowCreateWithoutTransactionInput, StockFlowUncheckedCreateWithoutTransactionInput> | StockFlowCreateWithoutTransactionInput[] | StockFlowUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: StockFlowCreateOrConnectWithoutTransactionInput | StockFlowCreateOrConnectWithoutTransactionInput[]
    createMany?: StockFlowCreateManyTransactionInputEnvelope
    connect?: StockFlowWhereUniqueInput | StockFlowWhereUniqueInput[]
  }

  export type InvoiceUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<InvoiceCreateWithoutTransactionsInput, InvoiceUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutTransactionsInput
    upsert?: InvoiceUpsertWithoutTransactionsInput
    connect?: InvoiceWhereUniqueInput
    update?: XOR<XOR<InvoiceUpdateToOneWithWhereWithoutTransactionsInput, InvoiceUpdateWithoutTransactionsInput>, InvoiceUncheckedUpdateWithoutTransactionsInput>
  }

  export type ItemUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<ItemCreateWithoutTransactionsInput, ItemUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: ItemCreateOrConnectWithoutTransactionsInput
    upsert?: ItemUpsertWithoutTransactionsInput
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutTransactionsInput, ItemUpdateWithoutTransactionsInput>, ItemUncheckedUpdateWithoutTransactionsInput>
  }

  export type WarehouseUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<WarehouseCreateWithoutTransactionsInput, WarehouseUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: WarehouseCreateOrConnectWithoutTransactionsInput
    upsert?: WarehouseUpsertWithoutTransactionsInput
    connect?: WarehouseWhereUniqueInput
    update?: XOR<XOR<WarehouseUpdateToOneWithWhereWithoutTransactionsInput, WarehouseUpdateWithoutTransactionsInput>, WarehouseUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    upsert?: UserUpsertWithoutTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransactionsInput, UserUpdateWithoutTransactionsInput>, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type StockFlowUpdateManyWithoutTransactionNestedInput = {
    create?: XOR<StockFlowCreateWithoutTransactionInput, StockFlowUncheckedCreateWithoutTransactionInput> | StockFlowCreateWithoutTransactionInput[] | StockFlowUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: StockFlowCreateOrConnectWithoutTransactionInput | StockFlowCreateOrConnectWithoutTransactionInput[]
    upsert?: StockFlowUpsertWithWhereUniqueWithoutTransactionInput | StockFlowUpsertWithWhereUniqueWithoutTransactionInput[]
    createMany?: StockFlowCreateManyTransactionInputEnvelope
    set?: StockFlowWhereUniqueInput | StockFlowWhereUniqueInput[]
    disconnect?: StockFlowWhereUniqueInput | StockFlowWhereUniqueInput[]
    delete?: StockFlowWhereUniqueInput | StockFlowWhereUniqueInput[]
    connect?: StockFlowWhereUniqueInput | StockFlowWhereUniqueInput[]
    update?: StockFlowUpdateWithWhereUniqueWithoutTransactionInput | StockFlowUpdateWithWhereUniqueWithoutTransactionInput[]
    updateMany?: StockFlowUpdateManyWithWhereWithoutTransactionInput | StockFlowUpdateManyWithWhereWithoutTransactionInput[]
    deleteMany?: StockFlowScalarWhereInput | StockFlowScalarWhereInput[]
  }

  export type StockFlowUncheckedUpdateManyWithoutTransactionNestedInput = {
    create?: XOR<StockFlowCreateWithoutTransactionInput, StockFlowUncheckedCreateWithoutTransactionInput> | StockFlowCreateWithoutTransactionInput[] | StockFlowUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: StockFlowCreateOrConnectWithoutTransactionInput | StockFlowCreateOrConnectWithoutTransactionInput[]
    upsert?: StockFlowUpsertWithWhereUniqueWithoutTransactionInput | StockFlowUpsertWithWhereUniqueWithoutTransactionInput[]
    createMany?: StockFlowCreateManyTransactionInputEnvelope
    set?: StockFlowWhereUniqueInput | StockFlowWhereUniqueInput[]
    disconnect?: StockFlowWhereUniqueInput | StockFlowWhereUniqueInput[]
    delete?: StockFlowWhereUniqueInput | StockFlowWhereUniqueInput[]
    connect?: StockFlowWhereUniqueInput | StockFlowWhereUniqueInput[]
    update?: StockFlowUpdateWithWhereUniqueWithoutTransactionInput | StockFlowUpdateWithWhereUniqueWithoutTransactionInput[]
    updateMany?: StockFlowUpdateManyWithWhereWithoutTransactionInput | StockFlowUpdateManyWithWhereWithoutTransactionInput[]
    deleteMany?: StockFlowScalarWhereInput | StockFlowScalarWhereInput[]
  }

  export type ItemCreateNestedOneWithoutStockFlowsInput = {
    create?: XOR<ItemCreateWithoutStockFlowsInput, ItemUncheckedCreateWithoutStockFlowsInput>
    connectOrCreate?: ItemCreateOrConnectWithoutStockFlowsInput
    connect?: ItemWhereUniqueInput
  }

  export type WarehouseCreateNestedOneWithoutStockFlowsInput = {
    create?: XOR<WarehouseCreateWithoutStockFlowsInput, WarehouseUncheckedCreateWithoutStockFlowsInput>
    connectOrCreate?: WarehouseCreateOrConnectWithoutStockFlowsInput
    connect?: WarehouseWhereUniqueInput
  }

  export type TransactionCreateNestedOneWithoutStockFlowsInput = {
    create?: XOR<TransactionCreateWithoutStockFlowsInput, TransactionUncheckedCreateWithoutStockFlowsInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutStockFlowsInput
    connect?: TransactionWhereUniqueInput
  }

  export type EnumStockDirectionFieldUpdateOperationsInput = {
    set?: $Enums.StockDirection
  }

  export type ItemUpdateOneRequiredWithoutStockFlowsNestedInput = {
    create?: XOR<ItemCreateWithoutStockFlowsInput, ItemUncheckedCreateWithoutStockFlowsInput>
    connectOrCreate?: ItemCreateOrConnectWithoutStockFlowsInput
    upsert?: ItemUpsertWithoutStockFlowsInput
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutStockFlowsInput, ItemUpdateWithoutStockFlowsInput>, ItemUncheckedUpdateWithoutStockFlowsInput>
  }

  export type WarehouseUpdateOneRequiredWithoutStockFlowsNestedInput = {
    create?: XOR<WarehouseCreateWithoutStockFlowsInput, WarehouseUncheckedCreateWithoutStockFlowsInput>
    connectOrCreate?: WarehouseCreateOrConnectWithoutStockFlowsInput
    upsert?: WarehouseUpsertWithoutStockFlowsInput
    connect?: WarehouseWhereUniqueInput
    update?: XOR<XOR<WarehouseUpdateToOneWithWhereWithoutStockFlowsInput, WarehouseUpdateWithoutStockFlowsInput>, WarehouseUncheckedUpdateWithoutStockFlowsInput>
  }

  export type TransactionUpdateOneRequiredWithoutStockFlowsNestedInput = {
    create?: XOR<TransactionCreateWithoutStockFlowsInput, TransactionUncheckedCreateWithoutStockFlowsInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutStockFlowsInput
    upsert?: TransactionUpsertWithoutStockFlowsInput
    connect?: TransactionWhereUniqueInput
    update?: XOR<XOR<TransactionUpdateToOneWithWhereWithoutStockFlowsInput, TransactionUpdateWithoutStockFlowsInput>, TransactionUncheckedUpdateWithoutStockFlowsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumWarehouseTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.WarehouseType | EnumWarehouseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.WarehouseType[] | ListEnumWarehouseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WarehouseType[] | ListEnumWarehouseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumWarehouseTypeFilter<$PrismaModel> | $Enums.WarehouseType
  }

  export type NestedEnumWarehouseTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WarehouseType | EnumWarehouseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.WarehouseType[] | ListEnumWarehouseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WarehouseType[] | ListEnumWarehouseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumWarehouseTypeWithAggregatesFilter<$PrismaModel> | $Enums.WarehouseType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWarehouseTypeFilter<$PrismaModel>
    _max?: NestedEnumWarehouseTypeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumStockDirectionFilter<$PrismaModel = never> = {
    equals?: $Enums.StockDirection | EnumStockDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.StockDirection[] | ListEnumStockDirectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.StockDirection[] | ListEnumStockDirectionFieldRefInput<$PrismaModel>
    not?: NestedEnumStockDirectionFilter<$PrismaModel> | $Enums.StockDirection
  }

  export type NestedEnumStockDirectionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StockDirection | EnumStockDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.StockDirection[] | ListEnumStockDirectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.StockDirection[] | ListEnumStockDirectionFieldRefInput<$PrismaModel>
    not?: NestedEnumStockDirectionWithAggregatesFilter<$PrismaModel> | $Enums.StockDirection
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStockDirectionFilter<$PrismaModel>
    _max?: NestedEnumStockDirectionFilter<$PrismaModel>
  }

  export type InvoiceCreateWithoutCreatedByInput = {
    id?: string
    invoiceCode: string
    transactionDate: Date | string
    paymentStatus: boolean
    buyer?: string | null
    paymentMethod: string
    createdAt?: Date | string
    transactions?: TransactionCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateWithoutCreatedByInput = {
    id?: string
    invoiceCode: string
    transactionDate: Date | string
    paymentStatus: boolean
    buyer?: string | null
    paymentMethod: string
    createdAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceCreateOrConnectWithoutCreatedByInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutCreatedByInput, InvoiceUncheckedCreateWithoutCreatedByInput>
  }

  export type InvoiceCreateManyCreatedByInputEnvelope = {
    data: InvoiceCreateManyCreatedByInput | InvoiceCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutCreatedByInput = {
    id?: string
    quantity: number
    unitPrice: number
    isPurchase: boolean
    subtotal: number
    createdAt?: Date | string
    invoice: InvoiceCreateNestedOneWithoutTransactionsInput
    item: ItemCreateNestedOneWithoutTransactionsInput
    warehouse: WarehouseCreateNestedOneWithoutTransactionsInput
    stockFlows?: StockFlowCreateNestedManyWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutCreatedByInput = {
    id?: string
    invoiceId: string
    itemId: string
    warehouseId: string
    quantity: number
    unitPrice: number
    isPurchase: boolean
    subtotal: number
    createdAt?: Date | string
    stockFlows?: StockFlowUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionCreateOrConnectWithoutCreatedByInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutCreatedByInput, TransactionUncheckedCreateWithoutCreatedByInput>
  }

  export type TransactionCreateManyCreatedByInputEnvelope = {
    data: TransactionCreateManyCreatedByInput | TransactionCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type ItemPriceHistoryCreateWithoutChangedByInput = {
    id?: string
    price: number
    changedAt?: Date | string
    item: ItemCreateNestedOneWithoutPriceHistoriesInput
  }

  export type ItemPriceHistoryUncheckedCreateWithoutChangedByInput = {
    id?: string
    itemId: string
    price: number
    changedAt?: Date | string
  }

  export type ItemPriceHistoryCreateOrConnectWithoutChangedByInput = {
    where: ItemPriceHistoryWhereUniqueInput
    create: XOR<ItemPriceHistoryCreateWithoutChangedByInput, ItemPriceHistoryUncheckedCreateWithoutChangedByInput>
  }

  export type ItemPriceHistoryCreateManyChangedByInputEnvelope = {
    data: ItemPriceHistoryCreateManyChangedByInput | ItemPriceHistoryCreateManyChangedByInput[]
    skipDuplicates?: boolean
  }

  export type InvoiceUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: InvoiceWhereUniqueInput
    update: XOR<InvoiceUpdateWithoutCreatedByInput, InvoiceUncheckedUpdateWithoutCreatedByInput>
    create: XOR<InvoiceCreateWithoutCreatedByInput, InvoiceUncheckedCreateWithoutCreatedByInput>
  }

  export type InvoiceUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: InvoiceWhereUniqueInput
    data: XOR<InvoiceUpdateWithoutCreatedByInput, InvoiceUncheckedUpdateWithoutCreatedByInput>
  }

  export type InvoiceUpdateManyWithWhereWithoutCreatedByInput = {
    where: InvoiceScalarWhereInput
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type InvoiceScalarWhereInput = {
    AND?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    OR?: InvoiceScalarWhereInput[]
    NOT?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    id?: StringFilter<"Invoice"> | string
    invoiceCode?: StringFilter<"Invoice"> | string
    transactionDate?: DateTimeFilter<"Invoice"> | Date | string
    paymentStatus?: BoolFilter<"Invoice"> | boolean
    buyer?: StringNullableFilter<"Invoice"> | string | null
    paymentMethod?: StringFilter<"Invoice"> | string
    createdById?: StringFilter<"Invoice"> | string
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutCreatedByInput, TransactionUncheckedUpdateWithoutCreatedByInput>
    create: XOR<TransactionCreateWithoutCreatedByInput, TransactionUncheckedCreateWithoutCreatedByInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutCreatedByInput, TransactionUncheckedUpdateWithoutCreatedByInput>
  }

  export type TransactionUpdateManyWithWhereWithoutCreatedByInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: StringFilter<"Transaction"> | string
    invoiceId?: StringFilter<"Transaction"> | string
    itemId?: StringFilter<"Transaction"> | string
    warehouseId?: StringFilter<"Transaction"> | string
    quantity?: IntFilter<"Transaction"> | number
    unitPrice?: FloatFilter<"Transaction"> | number
    isPurchase?: BoolFilter<"Transaction"> | boolean
    subtotal?: FloatFilter<"Transaction"> | number
    createdById?: StringFilter<"Transaction"> | string
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
  }

  export type ItemPriceHistoryUpsertWithWhereUniqueWithoutChangedByInput = {
    where: ItemPriceHistoryWhereUniqueInput
    update: XOR<ItemPriceHistoryUpdateWithoutChangedByInput, ItemPriceHistoryUncheckedUpdateWithoutChangedByInput>
    create: XOR<ItemPriceHistoryCreateWithoutChangedByInput, ItemPriceHistoryUncheckedCreateWithoutChangedByInput>
  }

  export type ItemPriceHistoryUpdateWithWhereUniqueWithoutChangedByInput = {
    where: ItemPriceHistoryWhereUniqueInput
    data: XOR<ItemPriceHistoryUpdateWithoutChangedByInput, ItemPriceHistoryUncheckedUpdateWithoutChangedByInput>
  }

  export type ItemPriceHistoryUpdateManyWithWhereWithoutChangedByInput = {
    where: ItemPriceHistoryScalarWhereInput
    data: XOR<ItemPriceHistoryUpdateManyMutationInput, ItemPriceHistoryUncheckedUpdateManyWithoutChangedByInput>
  }

  export type ItemPriceHistoryScalarWhereInput = {
    AND?: ItemPriceHistoryScalarWhereInput | ItemPriceHistoryScalarWhereInput[]
    OR?: ItemPriceHistoryScalarWhereInput[]
    NOT?: ItemPriceHistoryScalarWhereInput | ItemPriceHistoryScalarWhereInput[]
    id?: StringFilter<"ItemPriceHistory"> | string
    itemId?: StringFilter<"ItemPriceHistory"> | string
    price?: FloatFilter<"ItemPriceHistory"> | number
    changedAt?: DateTimeFilter<"ItemPriceHistory"> | Date | string
    userId?: StringFilter<"ItemPriceHistory"> | string
  }

  export type ItemStockCreateWithoutWarehouseInput = {
    id?: string
    stockQty: number
    createdAt?: Date | string
    updatedAt?: Date | string
    item: ItemCreateNestedOneWithoutItemStocksInput
  }

  export type ItemStockUncheckedCreateWithoutWarehouseInput = {
    id?: string
    itemId: string
    stockQty: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemStockCreateOrConnectWithoutWarehouseInput = {
    where: ItemStockWhereUniqueInput
    create: XOR<ItemStockCreateWithoutWarehouseInput, ItemStockUncheckedCreateWithoutWarehouseInput>
  }

  export type ItemStockCreateManyWarehouseInputEnvelope = {
    data: ItemStockCreateManyWarehouseInput | ItemStockCreateManyWarehouseInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutWarehouseInput = {
    id?: string
    quantity: number
    unitPrice: number
    isPurchase: boolean
    subtotal: number
    createdAt?: Date | string
    invoice: InvoiceCreateNestedOneWithoutTransactionsInput
    item: ItemCreateNestedOneWithoutTransactionsInput
    createdBy: UserCreateNestedOneWithoutTransactionsInput
    stockFlows?: StockFlowCreateNestedManyWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutWarehouseInput = {
    id?: string
    invoiceId: string
    itemId: string
    quantity: number
    unitPrice: number
    isPurchase: boolean
    subtotal: number
    createdById: string
    createdAt?: Date | string
    stockFlows?: StockFlowUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionCreateOrConnectWithoutWarehouseInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutWarehouseInput, TransactionUncheckedCreateWithoutWarehouseInput>
  }

  export type TransactionCreateManyWarehouseInputEnvelope = {
    data: TransactionCreateManyWarehouseInput | TransactionCreateManyWarehouseInput[]
    skipDuplicates?: boolean
  }

  export type StockFlowCreateWithoutWarehouseInput = {
    id?: string
    direction: $Enums.StockDirection
    qty: number
    unitCost: number
    remainingQty: number
    createdAt?: Date | string
    item: ItemCreateNestedOneWithoutStockFlowsInput
    transaction: TransactionCreateNestedOneWithoutStockFlowsInput
  }

  export type StockFlowUncheckedCreateWithoutWarehouseInput = {
    id?: string
    itemId: string
    transactionId: string
    direction: $Enums.StockDirection
    qty: number
    unitCost: number
    remainingQty: number
    createdAt?: Date | string
  }

  export type StockFlowCreateOrConnectWithoutWarehouseInput = {
    where: StockFlowWhereUniqueInput
    create: XOR<StockFlowCreateWithoutWarehouseInput, StockFlowUncheckedCreateWithoutWarehouseInput>
  }

  export type StockFlowCreateManyWarehouseInputEnvelope = {
    data: StockFlowCreateManyWarehouseInput | StockFlowCreateManyWarehouseInput[]
    skipDuplicates?: boolean
  }

  export type ItemStockUpsertWithWhereUniqueWithoutWarehouseInput = {
    where: ItemStockWhereUniqueInput
    update: XOR<ItemStockUpdateWithoutWarehouseInput, ItemStockUncheckedUpdateWithoutWarehouseInput>
    create: XOR<ItemStockCreateWithoutWarehouseInput, ItemStockUncheckedCreateWithoutWarehouseInput>
  }

  export type ItemStockUpdateWithWhereUniqueWithoutWarehouseInput = {
    where: ItemStockWhereUniqueInput
    data: XOR<ItemStockUpdateWithoutWarehouseInput, ItemStockUncheckedUpdateWithoutWarehouseInput>
  }

  export type ItemStockUpdateManyWithWhereWithoutWarehouseInput = {
    where: ItemStockScalarWhereInput
    data: XOR<ItemStockUpdateManyMutationInput, ItemStockUncheckedUpdateManyWithoutWarehouseInput>
  }

  export type ItemStockScalarWhereInput = {
    AND?: ItemStockScalarWhereInput | ItemStockScalarWhereInput[]
    OR?: ItemStockScalarWhereInput[]
    NOT?: ItemStockScalarWhereInput | ItemStockScalarWhereInput[]
    id?: StringFilter<"ItemStock"> | string
    itemId?: StringFilter<"ItemStock"> | string
    warehouseId?: StringFilter<"ItemStock"> | string
    stockQty?: IntFilter<"ItemStock"> | number
    createdAt?: DateTimeFilter<"ItemStock"> | Date | string
    updatedAt?: DateTimeFilter<"ItemStock"> | Date | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutWarehouseInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutWarehouseInput, TransactionUncheckedUpdateWithoutWarehouseInput>
    create: XOR<TransactionCreateWithoutWarehouseInput, TransactionUncheckedCreateWithoutWarehouseInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutWarehouseInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutWarehouseInput, TransactionUncheckedUpdateWithoutWarehouseInput>
  }

  export type TransactionUpdateManyWithWhereWithoutWarehouseInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutWarehouseInput>
  }

  export type StockFlowUpsertWithWhereUniqueWithoutWarehouseInput = {
    where: StockFlowWhereUniqueInput
    update: XOR<StockFlowUpdateWithoutWarehouseInput, StockFlowUncheckedUpdateWithoutWarehouseInput>
    create: XOR<StockFlowCreateWithoutWarehouseInput, StockFlowUncheckedCreateWithoutWarehouseInput>
  }

  export type StockFlowUpdateWithWhereUniqueWithoutWarehouseInput = {
    where: StockFlowWhereUniqueInput
    data: XOR<StockFlowUpdateWithoutWarehouseInput, StockFlowUncheckedUpdateWithoutWarehouseInput>
  }

  export type StockFlowUpdateManyWithWhereWithoutWarehouseInput = {
    where: StockFlowScalarWhereInput
    data: XOR<StockFlowUpdateManyMutationInput, StockFlowUncheckedUpdateManyWithoutWarehouseInput>
  }

  export type StockFlowScalarWhereInput = {
    AND?: StockFlowScalarWhereInput | StockFlowScalarWhereInput[]
    OR?: StockFlowScalarWhereInput[]
    NOT?: StockFlowScalarWhereInput | StockFlowScalarWhereInput[]
    id?: StringFilter<"StockFlow"> | string
    itemId?: StringFilter<"StockFlow"> | string
    warehouseId?: StringFilter<"StockFlow"> | string
    transactionId?: StringFilter<"StockFlow"> | string
    direction?: EnumStockDirectionFilter<"StockFlow"> | $Enums.StockDirection
    qty?: IntFilter<"StockFlow"> | number
    unitCost?: FloatFilter<"StockFlow"> | number
    remainingQty?: IntFilter<"StockFlow"> | number
    createdAt?: DateTimeFilter<"StockFlow"> | Date | string
  }

  export type ItemStockCreateWithoutItemInput = {
    id?: string
    stockQty: number
    createdAt?: Date | string
    updatedAt?: Date | string
    warehouse: WarehouseCreateNestedOneWithoutItemStocksInput
  }

  export type ItemStockUncheckedCreateWithoutItemInput = {
    id?: string
    warehouseId: string
    stockQty: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemStockCreateOrConnectWithoutItemInput = {
    where: ItemStockWhereUniqueInput
    create: XOR<ItemStockCreateWithoutItemInput, ItemStockUncheckedCreateWithoutItemInput>
  }

  export type ItemStockCreateManyItemInputEnvelope = {
    data: ItemStockCreateManyItemInput | ItemStockCreateManyItemInput[]
    skipDuplicates?: boolean
  }

  export type ItemPriceHistoryCreateWithoutItemInput = {
    id?: string
    price: number
    changedAt?: Date | string
    changedBy: UserCreateNestedOneWithoutPriceHistoriesInput
  }

  export type ItemPriceHistoryUncheckedCreateWithoutItemInput = {
    id?: string
    price: number
    changedAt?: Date | string
    userId: string
  }

  export type ItemPriceHistoryCreateOrConnectWithoutItemInput = {
    where: ItemPriceHistoryWhereUniqueInput
    create: XOR<ItemPriceHistoryCreateWithoutItemInput, ItemPriceHistoryUncheckedCreateWithoutItemInput>
  }

  export type ItemPriceHistoryCreateManyItemInputEnvelope = {
    data: ItemPriceHistoryCreateManyItemInput | ItemPriceHistoryCreateManyItemInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutItemInput = {
    id?: string
    quantity: number
    unitPrice: number
    isPurchase: boolean
    subtotal: number
    createdAt?: Date | string
    invoice: InvoiceCreateNestedOneWithoutTransactionsInput
    warehouse: WarehouseCreateNestedOneWithoutTransactionsInput
    createdBy: UserCreateNestedOneWithoutTransactionsInput
    stockFlows?: StockFlowCreateNestedManyWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutItemInput = {
    id?: string
    invoiceId: string
    warehouseId: string
    quantity: number
    unitPrice: number
    isPurchase: boolean
    subtotal: number
    createdById: string
    createdAt?: Date | string
    stockFlows?: StockFlowUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionCreateOrConnectWithoutItemInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutItemInput, TransactionUncheckedCreateWithoutItemInput>
  }

  export type TransactionCreateManyItemInputEnvelope = {
    data: TransactionCreateManyItemInput | TransactionCreateManyItemInput[]
    skipDuplicates?: boolean
  }

  export type StockFlowCreateWithoutItemInput = {
    id?: string
    direction: $Enums.StockDirection
    qty: number
    unitCost: number
    remainingQty: number
    createdAt?: Date | string
    warehouse: WarehouseCreateNestedOneWithoutStockFlowsInput
    transaction: TransactionCreateNestedOneWithoutStockFlowsInput
  }

  export type StockFlowUncheckedCreateWithoutItemInput = {
    id?: string
    warehouseId: string
    transactionId: string
    direction: $Enums.StockDirection
    qty: number
    unitCost: number
    remainingQty: number
    createdAt?: Date | string
  }

  export type StockFlowCreateOrConnectWithoutItemInput = {
    where: StockFlowWhereUniqueInput
    create: XOR<StockFlowCreateWithoutItemInput, StockFlowUncheckedCreateWithoutItemInput>
  }

  export type StockFlowCreateManyItemInputEnvelope = {
    data: StockFlowCreateManyItemInput | StockFlowCreateManyItemInput[]
    skipDuplicates?: boolean
  }

  export type ItemStockUpsertWithWhereUniqueWithoutItemInput = {
    where: ItemStockWhereUniqueInput
    update: XOR<ItemStockUpdateWithoutItemInput, ItemStockUncheckedUpdateWithoutItemInput>
    create: XOR<ItemStockCreateWithoutItemInput, ItemStockUncheckedCreateWithoutItemInput>
  }

  export type ItemStockUpdateWithWhereUniqueWithoutItemInput = {
    where: ItemStockWhereUniqueInput
    data: XOR<ItemStockUpdateWithoutItemInput, ItemStockUncheckedUpdateWithoutItemInput>
  }

  export type ItemStockUpdateManyWithWhereWithoutItemInput = {
    where: ItemStockScalarWhereInput
    data: XOR<ItemStockUpdateManyMutationInput, ItemStockUncheckedUpdateManyWithoutItemInput>
  }

  export type ItemPriceHistoryUpsertWithWhereUniqueWithoutItemInput = {
    where: ItemPriceHistoryWhereUniqueInput
    update: XOR<ItemPriceHistoryUpdateWithoutItemInput, ItemPriceHistoryUncheckedUpdateWithoutItemInput>
    create: XOR<ItemPriceHistoryCreateWithoutItemInput, ItemPriceHistoryUncheckedCreateWithoutItemInput>
  }

  export type ItemPriceHistoryUpdateWithWhereUniqueWithoutItemInput = {
    where: ItemPriceHistoryWhereUniqueInput
    data: XOR<ItemPriceHistoryUpdateWithoutItemInput, ItemPriceHistoryUncheckedUpdateWithoutItemInput>
  }

  export type ItemPriceHistoryUpdateManyWithWhereWithoutItemInput = {
    where: ItemPriceHistoryScalarWhereInput
    data: XOR<ItemPriceHistoryUpdateManyMutationInput, ItemPriceHistoryUncheckedUpdateManyWithoutItemInput>
  }

  export type TransactionUpsertWithWhereUniqueWithoutItemInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutItemInput, TransactionUncheckedUpdateWithoutItemInput>
    create: XOR<TransactionCreateWithoutItemInput, TransactionUncheckedCreateWithoutItemInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutItemInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutItemInput, TransactionUncheckedUpdateWithoutItemInput>
  }

  export type TransactionUpdateManyWithWhereWithoutItemInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutItemInput>
  }

  export type StockFlowUpsertWithWhereUniqueWithoutItemInput = {
    where: StockFlowWhereUniqueInput
    update: XOR<StockFlowUpdateWithoutItemInput, StockFlowUncheckedUpdateWithoutItemInput>
    create: XOR<StockFlowCreateWithoutItemInput, StockFlowUncheckedCreateWithoutItemInput>
  }

  export type StockFlowUpdateWithWhereUniqueWithoutItemInput = {
    where: StockFlowWhereUniqueInput
    data: XOR<StockFlowUpdateWithoutItemInput, StockFlowUncheckedUpdateWithoutItemInput>
  }

  export type StockFlowUpdateManyWithWhereWithoutItemInput = {
    where: StockFlowScalarWhereInput
    data: XOR<StockFlowUpdateManyMutationInput, StockFlowUncheckedUpdateManyWithoutItemInput>
  }

  export type ItemCreateWithoutItemStocksInput = {
    id?: string
    name: string
    currentPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    priceHistories?: ItemPriceHistoryCreateNestedManyWithoutItemInput
    transactions?: TransactionCreateNestedManyWithoutItemInput
    stockFlows?: StockFlowCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutItemStocksInput = {
    id?: string
    name: string
    currentPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    priceHistories?: ItemPriceHistoryUncheckedCreateNestedManyWithoutItemInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutItemInput
    stockFlows?: StockFlowUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutItemStocksInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutItemStocksInput, ItemUncheckedCreateWithoutItemStocksInput>
  }

  export type WarehouseCreateWithoutItemStocksInput = {
    id?: string
    name: string
    address: string
    type: $Enums.WarehouseType
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    transactions?: TransactionCreateNestedManyWithoutWarehouseInput
    stockFlows?: StockFlowCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseUncheckedCreateWithoutItemStocksInput = {
    id?: string
    name: string
    address: string
    type: $Enums.WarehouseType
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    transactions?: TransactionUncheckedCreateNestedManyWithoutWarehouseInput
    stockFlows?: StockFlowUncheckedCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseCreateOrConnectWithoutItemStocksInput = {
    where: WarehouseWhereUniqueInput
    create: XOR<WarehouseCreateWithoutItemStocksInput, WarehouseUncheckedCreateWithoutItemStocksInput>
  }

  export type ItemUpsertWithoutItemStocksInput = {
    update: XOR<ItemUpdateWithoutItemStocksInput, ItemUncheckedUpdateWithoutItemStocksInput>
    create: XOR<ItemCreateWithoutItemStocksInput, ItemUncheckedCreateWithoutItemStocksInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutItemStocksInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutItemStocksInput, ItemUncheckedUpdateWithoutItemStocksInput>
  }

  export type ItemUpdateWithoutItemStocksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    currentPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priceHistories?: ItemPriceHistoryUpdateManyWithoutItemNestedInput
    transactions?: TransactionUpdateManyWithoutItemNestedInput
    stockFlows?: StockFlowUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutItemStocksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    currentPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priceHistories?: ItemPriceHistoryUncheckedUpdateManyWithoutItemNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutItemNestedInput
    stockFlows?: StockFlowUncheckedUpdateManyWithoutItemNestedInput
  }

  export type WarehouseUpsertWithoutItemStocksInput = {
    update: XOR<WarehouseUpdateWithoutItemStocksInput, WarehouseUncheckedUpdateWithoutItemStocksInput>
    create: XOR<WarehouseCreateWithoutItemStocksInput, WarehouseUncheckedCreateWithoutItemStocksInput>
    where?: WarehouseWhereInput
  }

  export type WarehouseUpdateToOneWithWhereWithoutItemStocksInput = {
    where?: WarehouseWhereInput
    data: XOR<WarehouseUpdateWithoutItemStocksInput, WarehouseUncheckedUpdateWithoutItemStocksInput>
  }

  export type WarehouseUpdateWithoutItemStocksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    type?: EnumWarehouseTypeFieldUpdateOperationsInput | $Enums.WarehouseType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: TransactionUpdateManyWithoutWarehouseNestedInput
    stockFlows?: StockFlowUpdateManyWithoutWarehouseNestedInput
  }

  export type WarehouseUncheckedUpdateWithoutItemStocksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    type?: EnumWarehouseTypeFieldUpdateOperationsInput | $Enums.WarehouseType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: TransactionUncheckedUpdateManyWithoutWarehouseNestedInput
    stockFlows?: StockFlowUncheckedUpdateManyWithoutWarehouseNestedInput
  }

  export type ItemCreateWithoutPriceHistoriesInput = {
    id?: string
    name: string
    currentPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    itemStocks?: ItemStockCreateNestedManyWithoutItemInput
    transactions?: TransactionCreateNestedManyWithoutItemInput
    stockFlows?: StockFlowCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutPriceHistoriesInput = {
    id?: string
    name: string
    currentPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    itemStocks?: ItemStockUncheckedCreateNestedManyWithoutItemInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutItemInput
    stockFlows?: StockFlowUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutPriceHistoriesInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutPriceHistoriesInput, ItemUncheckedCreateWithoutPriceHistoriesInput>
  }

  export type UserCreateWithoutPriceHistoriesInput = {
    id?: string
    fullName: string
    username: string
    email: string
    phone: string
    role: $Enums.Role
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    invoices?: InvoiceCreateNestedManyWithoutCreatedByInput
    transactions?: TransactionCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutPriceHistoriesInput = {
    id?: string
    fullName: string
    username: string
    email: string
    phone: string
    role: $Enums.Role
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    invoices?: InvoiceUncheckedCreateNestedManyWithoutCreatedByInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutPriceHistoriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPriceHistoriesInput, UserUncheckedCreateWithoutPriceHistoriesInput>
  }

  export type ItemUpsertWithoutPriceHistoriesInput = {
    update: XOR<ItemUpdateWithoutPriceHistoriesInput, ItemUncheckedUpdateWithoutPriceHistoriesInput>
    create: XOR<ItemCreateWithoutPriceHistoriesInput, ItemUncheckedCreateWithoutPriceHistoriesInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutPriceHistoriesInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutPriceHistoriesInput, ItemUncheckedUpdateWithoutPriceHistoriesInput>
  }

  export type ItemUpdateWithoutPriceHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    currentPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemStocks?: ItemStockUpdateManyWithoutItemNestedInput
    transactions?: TransactionUpdateManyWithoutItemNestedInput
    stockFlows?: StockFlowUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutPriceHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    currentPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemStocks?: ItemStockUncheckedUpdateManyWithoutItemNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutItemNestedInput
    stockFlows?: StockFlowUncheckedUpdateManyWithoutItemNestedInput
  }

  export type UserUpsertWithoutPriceHistoriesInput = {
    update: XOR<UserUpdateWithoutPriceHistoriesInput, UserUncheckedUpdateWithoutPriceHistoriesInput>
    create: XOR<UserCreateWithoutPriceHistoriesInput, UserUncheckedCreateWithoutPriceHistoriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPriceHistoriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPriceHistoriesInput, UserUncheckedUpdateWithoutPriceHistoriesInput>
  }

  export type UserUpdateWithoutPriceHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invoices?: InvoiceUpdateManyWithoutCreatedByNestedInput
    transactions?: TransactionUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutPriceHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invoices?: InvoiceUncheckedUpdateManyWithoutCreatedByNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateWithoutInvoicesInput = {
    id?: string
    fullName: string
    username: string
    email: string
    phone: string
    role: $Enums.Role
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    transactions?: TransactionCreateNestedManyWithoutCreatedByInput
    priceHistories?: ItemPriceHistoryCreateNestedManyWithoutChangedByInput
  }

  export type UserUncheckedCreateWithoutInvoicesInput = {
    id?: string
    fullName: string
    username: string
    email: string
    phone: string
    role: $Enums.Role
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    transactions?: TransactionUncheckedCreateNestedManyWithoutCreatedByInput
    priceHistories?: ItemPriceHistoryUncheckedCreateNestedManyWithoutChangedByInput
  }

  export type UserCreateOrConnectWithoutInvoicesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInvoicesInput, UserUncheckedCreateWithoutInvoicesInput>
  }

  export type TransactionCreateWithoutInvoiceInput = {
    id?: string
    quantity: number
    unitPrice: number
    isPurchase: boolean
    subtotal: number
    createdAt?: Date | string
    item: ItemCreateNestedOneWithoutTransactionsInput
    warehouse: WarehouseCreateNestedOneWithoutTransactionsInput
    createdBy: UserCreateNestedOneWithoutTransactionsInput
    stockFlows?: StockFlowCreateNestedManyWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutInvoiceInput = {
    id?: string
    itemId: string
    warehouseId: string
    quantity: number
    unitPrice: number
    isPurchase: boolean
    subtotal: number
    createdById: string
    createdAt?: Date | string
    stockFlows?: StockFlowUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionCreateOrConnectWithoutInvoiceInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutInvoiceInput, TransactionUncheckedCreateWithoutInvoiceInput>
  }

  export type TransactionCreateManyInvoiceInputEnvelope = {
    data: TransactionCreateManyInvoiceInput | TransactionCreateManyInvoiceInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutInvoicesInput = {
    update: XOR<UserUpdateWithoutInvoicesInput, UserUncheckedUpdateWithoutInvoicesInput>
    create: XOR<UserCreateWithoutInvoicesInput, UserUncheckedCreateWithoutInvoicesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInvoicesInput, UserUncheckedUpdateWithoutInvoicesInput>
  }

  export type UserUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: TransactionUpdateManyWithoutCreatedByNestedInput
    priceHistories?: ItemPriceHistoryUpdateManyWithoutChangedByNestedInput
  }

  export type UserUncheckedUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: TransactionUncheckedUpdateManyWithoutCreatedByNestedInput
    priceHistories?: ItemPriceHistoryUncheckedUpdateManyWithoutChangedByNestedInput
  }

  export type TransactionUpsertWithWhereUniqueWithoutInvoiceInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutInvoiceInput, TransactionUncheckedUpdateWithoutInvoiceInput>
    create: XOR<TransactionCreateWithoutInvoiceInput, TransactionUncheckedCreateWithoutInvoiceInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutInvoiceInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutInvoiceInput, TransactionUncheckedUpdateWithoutInvoiceInput>
  }

  export type TransactionUpdateManyWithWhereWithoutInvoiceInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutInvoiceInput>
  }

  export type InvoiceCreateWithoutTransactionsInput = {
    id?: string
    invoiceCode: string
    transactionDate: Date | string
    paymentStatus: boolean
    buyer?: string | null
    paymentMethod: string
    createdAt?: Date | string
    createdBy: UserCreateNestedOneWithoutInvoicesInput
  }

  export type InvoiceUncheckedCreateWithoutTransactionsInput = {
    id?: string
    invoiceCode: string
    transactionDate: Date | string
    paymentStatus: boolean
    buyer?: string | null
    paymentMethod: string
    createdById: string
    createdAt?: Date | string
  }

  export type InvoiceCreateOrConnectWithoutTransactionsInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutTransactionsInput, InvoiceUncheckedCreateWithoutTransactionsInput>
  }

  export type ItemCreateWithoutTransactionsInput = {
    id?: string
    name: string
    currentPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    itemStocks?: ItemStockCreateNestedManyWithoutItemInput
    priceHistories?: ItemPriceHistoryCreateNestedManyWithoutItemInput
    stockFlows?: StockFlowCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutTransactionsInput = {
    id?: string
    name: string
    currentPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    itemStocks?: ItemStockUncheckedCreateNestedManyWithoutItemInput
    priceHistories?: ItemPriceHistoryUncheckedCreateNestedManyWithoutItemInput
    stockFlows?: StockFlowUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutTransactionsInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutTransactionsInput, ItemUncheckedCreateWithoutTransactionsInput>
  }

  export type WarehouseCreateWithoutTransactionsInput = {
    id?: string
    name: string
    address: string
    type: $Enums.WarehouseType
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    itemStocks?: ItemStockCreateNestedManyWithoutWarehouseInput
    stockFlows?: StockFlowCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseUncheckedCreateWithoutTransactionsInput = {
    id?: string
    name: string
    address: string
    type: $Enums.WarehouseType
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    itemStocks?: ItemStockUncheckedCreateNestedManyWithoutWarehouseInput
    stockFlows?: StockFlowUncheckedCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseCreateOrConnectWithoutTransactionsInput = {
    where: WarehouseWhereUniqueInput
    create: XOR<WarehouseCreateWithoutTransactionsInput, WarehouseUncheckedCreateWithoutTransactionsInput>
  }

  export type UserCreateWithoutTransactionsInput = {
    id?: string
    fullName: string
    username: string
    email: string
    phone: string
    role: $Enums.Role
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    invoices?: InvoiceCreateNestedManyWithoutCreatedByInput
    priceHistories?: ItemPriceHistoryCreateNestedManyWithoutChangedByInput
  }

  export type UserUncheckedCreateWithoutTransactionsInput = {
    id?: string
    fullName: string
    username: string
    email: string
    phone: string
    role: $Enums.Role
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    invoices?: InvoiceUncheckedCreateNestedManyWithoutCreatedByInput
    priceHistories?: ItemPriceHistoryUncheckedCreateNestedManyWithoutChangedByInput
  }

  export type UserCreateOrConnectWithoutTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
  }

  export type StockFlowCreateWithoutTransactionInput = {
    id?: string
    direction: $Enums.StockDirection
    qty: number
    unitCost: number
    remainingQty: number
    createdAt?: Date | string
    item: ItemCreateNestedOneWithoutStockFlowsInput
    warehouse: WarehouseCreateNestedOneWithoutStockFlowsInput
  }

  export type StockFlowUncheckedCreateWithoutTransactionInput = {
    id?: string
    itemId: string
    warehouseId: string
    direction: $Enums.StockDirection
    qty: number
    unitCost: number
    remainingQty: number
    createdAt?: Date | string
  }

  export type StockFlowCreateOrConnectWithoutTransactionInput = {
    where: StockFlowWhereUniqueInput
    create: XOR<StockFlowCreateWithoutTransactionInput, StockFlowUncheckedCreateWithoutTransactionInput>
  }

  export type StockFlowCreateManyTransactionInputEnvelope = {
    data: StockFlowCreateManyTransactionInput | StockFlowCreateManyTransactionInput[]
    skipDuplicates?: boolean
  }

  export type InvoiceUpsertWithoutTransactionsInput = {
    update: XOR<InvoiceUpdateWithoutTransactionsInput, InvoiceUncheckedUpdateWithoutTransactionsInput>
    create: XOR<InvoiceCreateWithoutTransactionsInput, InvoiceUncheckedCreateWithoutTransactionsInput>
    where?: InvoiceWhereInput
  }

  export type InvoiceUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: InvoiceWhereInput
    data: XOR<InvoiceUpdateWithoutTransactionsInput, InvoiceUncheckedUpdateWithoutTransactionsInput>
  }

  export type InvoiceUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceCode?: StringFieldUpdateOperationsInput | string
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentStatus?: BoolFieldUpdateOperationsInput | boolean
    buyer?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutInvoicesNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceCode?: StringFieldUpdateOperationsInput | string
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentStatus?: BoolFieldUpdateOperationsInput | boolean
    buyer?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUpsertWithoutTransactionsInput = {
    update: XOR<ItemUpdateWithoutTransactionsInput, ItemUncheckedUpdateWithoutTransactionsInput>
    create: XOR<ItemCreateWithoutTransactionsInput, ItemUncheckedCreateWithoutTransactionsInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutTransactionsInput, ItemUncheckedUpdateWithoutTransactionsInput>
  }

  export type ItemUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    currentPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemStocks?: ItemStockUpdateManyWithoutItemNestedInput
    priceHistories?: ItemPriceHistoryUpdateManyWithoutItemNestedInput
    stockFlows?: StockFlowUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    currentPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemStocks?: ItemStockUncheckedUpdateManyWithoutItemNestedInput
    priceHistories?: ItemPriceHistoryUncheckedUpdateManyWithoutItemNestedInput
    stockFlows?: StockFlowUncheckedUpdateManyWithoutItemNestedInput
  }

  export type WarehouseUpsertWithoutTransactionsInput = {
    update: XOR<WarehouseUpdateWithoutTransactionsInput, WarehouseUncheckedUpdateWithoutTransactionsInput>
    create: XOR<WarehouseCreateWithoutTransactionsInput, WarehouseUncheckedCreateWithoutTransactionsInput>
    where?: WarehouseWhereInput
  }

  export type WarehouseUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: WarehouseWhereInput
    data: XOR<WarehouseUpdateWithoutTransactionsInput, WarehouseUncheckedUpdateWithoutTransactionsInput>
  }

  export type WarehouseUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    type?: EnumWarehouseTypeFieldUpdateOperationsInput | $Enums.WarehouseType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemStocks?: ItemStockUpdateManyWithoutWarehouseNestedInput
    stockFlows?: StockFlowUpdateManyWithoutWarehouseNestedInput
  }

  export type WarehouseUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    type?: EnumWarehouseTypeFieldUpdateOperationsInput | $Enums.WarehouseType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemStocks?: ItemStockUncheckedUpdateManyWithoutWarehouseNestedInput
    stockFlows?: StockFlowUncheckedUpdateManyWithoutWarehouseNestedInput
  }

  export type UserUpsertWithoutTransactionsInput = {
    update: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invoices?: InvoiceUpdateManyWithoutCreatedByNestedInput
    priceHistories?: ItemPriceHistoryUpdateManyWithoutChangedByNestedInput
  }

  export type UserUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invoices?: InvoiceUncheckedUpdateManyWithoutCreatedByNestedInput
    priceHistories?: ItemPriceHistoryUncheckedUpdateManyWithoutChangedByNestedInput
  }

  export type StockFlowUpsertWithWhereUniqueWithoutTransactionInput = {
    where: StockFlowWhereUniqueInput
    update: XOR<StockFlowUpdateWithoutTransactionInput, StockFlowUncheckedUpdateWithoutTransactionInput>
    create: XOR<StockFlowCreateWithoutTransactionInput, StockFlowUncheckedCreateWithoutTransactionInput>
  }

  export type StockFlowUpdateWithWhereUniqueWithoutTransactionInput = {
    where: StockFlowWhereUniqueInput
    data: XOR<StockFlowUpdateWithoutTransactionInput, StockFlowUncheckedUpdateWithoutTransactionInput>
  }

  export type StockFlowUpdateManyWithWhereWithoutTransactionInput = {
    where: StockFlowScalarWhereInput
    data: XOR<StockFlowUpdateManyMutationInput, StockFlowUncheckedUpdateManyWithoutTransactionInput>
  }

  export type ItemCreateWithoutStockFlowsInput = {
    id?: string
    name: string
    currentPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    itemStocks?: ItemStockCreateNestedManyWithoutItemInput
    priceHistories?: ItemPriceHistoryCreateNestedManyWithoutItemInput
    transactions?: TransactionCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutStockFlowsInput = {
    id?: string
    name: string
    currentPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    itemStocks?: ItemStockUncheckedCreateNestedManyWithoutItemInput
    priceHistories?: ItemPriceHistoryUncheckedCreateNestedManyWithoutItemInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutStockFlowsInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutStockFlowsInput, ItemUncheckedCreateWithoutStockFlowsInput>
  }

  export type WarehouseCreateWithoutStockFlowsInput = {
    id?: string
    name: string
    address: string
    type: $Enums.WarehouseType
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    itemStocks?: ItemStockCreateNestedManyWithoutWarehouseInput
    transactions?: TransactionCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseUncheckedCreateWithoutStockFlowsInput = {
    id?: string
    name: string
    address: string
    type: $Enums.WarehouseType
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    itemStocks?: ItemStockUncheckedCreateNestedManyWithoutWarehouseInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseCreateOrConnectWithoutStockFlowsInput = {
    where: WarehouseWhereUniqueInput
    create: XOR<WarehouseCreateWithoutStockFlowsInput, WarehouseUncheckedCreateWithoutStockFlowsInput>
  }

  export type TransactionCreateWithoutStockFlowsInput = {
    id?: string
    quantity: number
    unitPrice: number
    isPurchase: boolean
    subtotal: number
    createdAt?: Date | string
    invoice: InvoiceCreateNestedOneWithoutTransactionsInput
    item: ItemCreateNestedOneWithoutTransactionsInput
    warehouse: WarehouseCreateNestedOneWithoutTransactionsInput
    createdBy: UserCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutStockFlowsInput = {
    id?: string
    invoiceId: string
    itemId: string
    warehouseId: string
    quantity: number
    unitPrice: number
    isPurchase: boolean
    subtotal: number
    createdById: string
    createdAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutStockFlowsInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutStockFlowsInput, TransactionUncheckedCreateWithoutStockFlowsInput>
  }

  export type ItemUpsertWithoutStockFlowsInput = {
    update: XOR<ItemUpdateWithoutStockFlowsInput, ItemUncheckedUpdateWithoutStockFlowsInput>
    create: XOR<ItemCreateWithoutStockFlowsInput, ItemUncheckedCreateWithoutStockFlowsInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutStockFlowsInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutStockFlowsInput, ItemUncheckedUpdateWithoutStockFlowsInput>
  }

  export type ItemUpdateWithoutStockFlowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    currentPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemStocks?: ItemStockUpdateManyWithoutItemNestedInput
    priceHistories?: ItemPriceHistoryUpdateManyWithoutItemNestedInput
    transactions?: TransactionUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutStockFlowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    currentPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemStocks?: ItemStockUncheckedUpdateManyWithoutItemNestedInput
    priceHistories?: ItemPriceHistoryUncheckedUpdateManyWithoutItemNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutItemNestedInput
  }

  export type WarehouseUpsertWithoutStockFlowsInput = {
    update: XOR<WarehouseUpdateWithoutStockFlowsInput, WarehouseUncheckedUpdateWithoutStockFlowsInput>
    create: XOR<WarehouseCreateWithoutStockFlowsInput, WarehouseUncheckedCreateWithoutStockFlowsInput>
    where?: WarehouseWhereInput
  }

  export type WarehouseUpdateToOneWithWhereWithoutStockFlowsInput = {
    where?: WarehouseWhereInput
    data: XOR<WarehouseUpdateWithoutStockFlowsInput, WarehouseUncheckedUpdateWithoutStockFlowsInput>
  }

  export type WarehouseUpdateWithoutStockFlowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    type?: EnumWarehouseTypeFieldUpdateOperationsInput | $Enums.WarehouseType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemStocks?: ItemStockUpdateManyWithoutWarehouseNestedInput
    transactions?: TransactionUpdateManyWithoutWarehouseNestedInput
  }

  export type WarehouseUncheckedUpdateWithoutStockFlowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    type?: EnumWarehouseTypeFieldUpdateOperationsInput | $Enums.WarehouseType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemStocks?: ItemStockUncheckedUpdateManyWithoutWarehouseNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutWarehouseNestedInput
  }

  export type TransactionUpsertWithoutStockFlowsInput = {
    update: XOR<TransactionUpdateWithoutStockFlowsInput, TransactionUncheckedUpdateWithoutStockFlowsInput>
    create: XOR<TransactionCreateWithoutStockFlowsInput, TransactionUncheckedCreateWithoutStockFlowsInput>
    where?: TransactionWhereInput
  }

  export type TransactionUpdateToOneWithWhereWithoutStockFlowsInput = {
    where?: TransactionWhereInput
    data: XOR<TransactionUpdateWithoutStockFlowsInput, TransactionUncheckedUpdateWithoutStockFlowsInput>
  }

  export type TransactionUpdateWithoutStockFlowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    isPurchase?: BoolFieldUpdateOperationsInput | boolean
    subtotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice?: InvoiceUpdateOneRequiredWithoutTransactionsNestedInput
    item?: ItemUpdateOneRequiredWithoutTransactionsNestedInput
    warehouse?: WarehouseUpdateOneRequiredWithoutTransactionsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutStockFlowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    isPurchase?: BoolFieldUpdateOperationsInput | boolean
    subtotal?: FloatFieldUpdateOperationsInput | number
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceCreateManyCreatedByInput = {
    id?: string
    invoiceCode: string
    transactionDate: Date | string
    paymentStatus: boolean
    buyer?: string | null
    paymentMethod: string
    createdAt?: Date | string
  }

  export type TransactionCreateManyCreatedByInput = {
    id?: string
    invoiceId: string
    itemId: string
    warehouseId: string
    quantity: number
    unitPrice: number
    isPurchase: boolean
    subtotal: number
    createdAt?: Date | string
  }

  export type ItemPriceHistoryCreateManyChangedByInput = {
    id?: string
    itemId: string
    price: number
    changedAt?: Date | string
  }

  export type InvoiceUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceCode?: StringFieldUpdateOperationsInput | string
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentStatus?: BoolFieldUpdateOperationsInput | boolean
    buyer?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceCode?: StringFieldUpdateOperationsInput | string
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentStatus?: BoolFieldUpdateOperationsInput | boolean
    buyer?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceCode?: StringFieldUpdateOperationsInput | string
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentStatus?: BoolFieldUpdateOperationsInput | boolean
    buyer?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    isPurchase?: BoolFieldUpdateOperationsInput | boolean
    subtotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice?: InvoiceUpdateOneRequiredWithoutTransactionsNestedInput
    item?: ItemUpdateOneRequiredWithoutTransactionsNestedInput
    warehouse?: WarehouseUpdateOneRequiredWithoutTransactionsNestedInput
    stockFlows?: StockFlowUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    isPurchase?: BoolFieldUpdateOperationsInput | boolean
    subtotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stockFlows?: StockFlowUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    isPurchase?: BoolFieldUpdateOperationsInput | boolean
    subtotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemPriceHistoryUpdateWithoutChangedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    item?: ItemUpdateOneRequiredWithoutPriceHistoriesNestedInput
  }

  export type ItemPriceHistoryUncheckedUpdateWithoutChangedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemPriceHistoryUncheckedUpdateManyWithoutChangedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemStockCreateManyWarehouseInput = {
    id?: string
    itemId: string
    stockQty: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateManyWarehouseInput = {
    id?: string
    invoiceId: string
    itemId: string
    quantity: number
    unitPrice: number
    isPurchase: boolean
    subtotal: number
    createdById: string
    createdAt?: Date | string
  }

  export type StockFlowCreateManyWarehouseInput = {
    id?: string
    itemId: string
    transactionId: string
    direction: $Enums.StockDirection
    qty: number
    unitCost: number
    remainingQty: number
    createdAt?: Date | string
  }

  export type ItemStockUpdateWithoutWarehouseInput = {
    id?: StringFieldUpdateOperationsInput | string
    stockQty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    item?: ItemUpdateOneRequiredWithoutItemStocksNestedInput
  }

  export type ItemStockUncheckedUpdateWithoutWarehouseInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    stockQty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemStockUncheckedUpdateManyWithoutWarehouseInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    stockQty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpdateWithoutWarehouseInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    isPurchase?: BoolFieldUpdateOperationsInput | boolean
    subtotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice?: InvoiceUpdateOneRequiredWithoutTransactionsNestedInput
    item?: ItemUpdateOneRequiredWithoutTransactionsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    stockFlows?: StockFlowUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutWarehouseInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    isPurchase?: BoolFieldUpdateOperationsInput | boolean
    subtotal?: FloatFieldUpdateOperationsInput | number
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stockFlows?: StockFlowUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateManyWithoutWarehouseInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    isPurchase?: BoolFieldUpdateOperationsInput | boolean
    subtotal?: FloatFieldUpdateOperationsInput | number
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockFlowUpdateWithoutWarehouseInput = {
    id?: StringFieldUpdateOperationsInput | string
    direction?: EnumStockDirectionFieldUpdateOperationsInput | $Enums.StockDirection
    qty?: IntFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    remainingQty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    item?: ItemUpdateOneRequiredWithoutStockFlowsNestedInput
    transaction?: TransactionUpdateOneRequiredWithoutStockFlowsNestedInput
  }

  export type StockFlowUncheckedUpdateWithoutWarehouseInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    direction?: EnumStockDirectionFieldUpdateOperationsInput | $Enums.StockDirection
    qty?: IntFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    remainingQty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockFlowUncheckedUpdateManyWithoutWarehouseInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    direction?: EnumStockDirectionFieldUpdateOperationsInput | $Enums.StockDirection
    qty?: IntFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    remainingQty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemStockCreateManyItemInput = {
    id?: string
    warehouseId: string
    stockQty: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemPriceHistoryCreateManyItemInput = {
    id?: string
    price: number
    changedAt?: Date | string
    userId: string
  }

  export type TransactionCreateManyItemInput = {
    id?: string
    invoiceId: string
    warehouseId: string
    quantity: number
    unitPrice: number
    isPurchase: boolean
    subtotal: number
    createdById: string
    createdAt?: Date | string
  }

  export type StockFlowCreateManyItemInput = {
    id?: string
    warehouseId: string
    transactionId: string
    direction: $Enums.StockDirection
    qty: number
    unitCost: number
    remainingQty: number
    createdAt?: Date | string
  }

  export type ItemStockUpdateWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    stockQty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    warehouse?: WarehouseUpdateOneRequiredWithoutItemStocksNestedInput
  }

  export type ItemStockUncheckedUpdateWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    stockQty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemStockUncheckedUpdateManyWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    stockQty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemPriceHistoryUpdateWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    changedBy?: UserUpdateOneRequiredWithoutPriceHistoriesNestedInput
  }

  export type ItemPriceHistoryUncheckedUpdateWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ItemPriceHistoryUncheckedUpdateManyWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionUpdateWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    isPurchase?: BoolFieldUpdateOperationsInput | boolean
    subtotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice?: InvoiceUpdateOneRequiredWithoutTransactionsNestedInput
    warehouse?: WarehouseUpdateOneRequiredWithoutTransactionsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    stockFlows?: StockFlowUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    isPurchase?: BoolFieldUpdateOperationsInput | boolean
    subtotal?: FloatFieldUpdateOperationsInput | number
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stockFlows?: StockFlowUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateManyWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    isPurchase?: BoolFieldUpdateOperationsInput | boolean
    subtotal?: FloatFieldUpdateOperationsInput | number
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockFlowUpdateWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    direction?: EnumStockDirectionFieldUpdateOperationsInput | $Enums.StockDirection
    qty?: IntFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    remainingQty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    warehouse?: WarehouseUpdateOneRequiredWithoutStockFlowsNestedInput
    transaction?: TransactionUpdateOneRequiredWithoutStockFlowsNestedInput
  }

  export type StockFlowUncheckedUpdateWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    direction?: EnumStockDirectionFieldUpdateOperationsInput | $Enums.StockDirection
    qty?: IntFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    remainingQty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockFlowUncheckedUpdateManyWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    direction?: EnumStockDirectionFieldUpdateOperationsInput | $Enums.StockDirection
    qty?: IntFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    remainingQty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyInvoiceInput = {
    id?: string
    itemId: string
    warehouseId: string
    quantity: number
    unitPrice: number
    isPurchase: boolean
    subtotal: number
    createdById: string
    createdAt?: Date | string
  }

  export type TransactionUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    isPurchase?: BoolFieldUpdateOperationsInput | boolean
    subtotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    item?: ItemUpdateOneRequiredWithoutTransactionsNestedInput
    warehouse?: WarehouseUpdateOneRequiredWithoutTransactionsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    stockFlows?: StockFlowUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    isPurchase?: BoolFieldUpdateOperationsInput | boolean
    subtotal?: FloatFieldUpdateOperationsInput | number
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stockFlows?: StockFlowUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateManyWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    isPurchase?: BoolFieldUpdateOperationsInput | boolean
    subtotal?: FloatFieldUpdateOperationsInput | number
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockFlowCreateManyTransactionInput = {
    id?: string
    itemId: string
    warehouseId: string
    direction: $Enums.StockDirection
    qty: number
    unitCost: number
    remainingQty: number
    createdAt?: Date | string
  }

  export type StockFlowUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    direction?: EnumStockDirectionFieldUpdateOperationsInput | $Enums.StockDirection
    qty?: IntFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    remainingQty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    item?: ItemUpdateOneRequiredWithoutStockFlowsNestedInput
    warehouse?: WarehouseUpdateOneRequiredWithoutStockFlowsNestedInput
  }

  export type StockFlowUncheckedUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    direction?: EnumStockDirectionFieldUpdateOperationsInput | $Enums.StockDirection
    qty?: IntFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    remainingQty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockFlowUncheckedUpdateManyWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    direction?: EnumStockDirectionFieldUpdateOperationsInput | $Enums.StockDirection
    qty?: IntFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    remainingQty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}