
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
 * Model Item
 * 
 */
export type Item = $Result.DefaultSelection<Prisma.$ItemPayload>
/**
 * Model TradeOffer
 * 
 */
export type TradeOffer = $Result.DefaultSelection<Prisma.$TradeOfferPayload>
/**
 * Model TradeOfferItem
 * 
 */
export type TradeOfferItem = $Result.DefaultSelection<Prisma.$TradeOfferItemPayload>
/**
 * Model OfferProposal
 * 
 */
export type OfferProposal = $Result.DefaultSelection<Prisma.$OfferProposalPayload>
/**
 * Model ProposalItem
 * 
 */
export type ProposalItem = $Result.DefaultSelection<Prisma.$ProposalItemPayload>

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
   * `prisma.item`: Exposes CRUD operations for the **Item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.item.findMany()
    * ```
    */
  get item(): Prisma.ItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tradeOffer`: Exposes CRUD operations for the **TradeOffer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TradeOffers
    * const tradeOffers = await prisma.tradeOffer.findMany()
    * ```
    */
  get tradeOffer(): Prisma.TradeOfferDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tradeOfferItem`: Exposes CRUD operations for the **TradeOfferItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TradeOfferItems
    * const tradeOfferItems = await prisma.tradeOfferItem.findMany()
    * ```
    */
  get tradeOfferItem(): Prisma.TradeOfferItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.offerProposal`: Exposes CRUD operations for the **OfferProposal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OfferProposals
    * const offerProposals = await prisma.offerProposal.findMany()
    * ```
    */
  get offerProposal(): Prisma.OfferProposalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.proposalItem`: Exposes CRUD operations for the **ProposalItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProposalItems
    * const proposalItems = await prisma.proposalItem.findMany()
    * ```
    */
  get proposalItem(): Prisma.ProposalItemDelegate<ExtArgs, ClientOptions>;
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
    Item: 'Item',
    TradeOffer: 'TradeOffer',
    TradeOfferItem: 'TradeOfferItem',
    OfferProposal: 'OfferProposal',
    ProposalItem: 'ProposalItem'
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
      modelProps: "user" | "item" | "tradeOffer" | "tradeOfferItem" | "offerProposal" | "proposalItem"
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
      TradeOffer: {
        payload: Prisma.$TradeOfferPayload<ExtArgs>
        fields: Prisma.TradeOfferFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TradeOfferFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradeOfferPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TradeOfferFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradeOfferPayload>
          }
          findFirst: {
            args: Prisma.TradeOfferFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradeOfferPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TradeOfferFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradeOfferPayload>
          }
          findMany: {
            args: Prisma.TradeOfferFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradeOfferPayload>[]
          }
          create: {
            args: Prisma.TradeOfferCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradeOfferPayload>
          }
          createMany: {
            args: Prisma.TradeOfferCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TradeOfferCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradeOfferPayload>[]
          }
          delete: {
            args: Prisma.TradeOfferDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradeOfferPayload>
          }
          update: {
            args: Prisma.TradeOfferUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradeOfferPayload>
          }
          deleteMany: {
            args: Prisma.TradeOfferDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TradeOfferUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TradeOfferUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradeOfferPayload>[]
          }
          upsert: {
            args: Prisma.TradeOfferUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradeOfferPayload>
          }
          aggregate: {
            args: Prisma.TradeOfferAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTradeOffer>
          }
          groupBy: {
            args: Prisma.TradeOfferGroupByArgs<ExtArgs>
            result: $Utils.Optional<TradeOfferGroupByOutputType>[]
          }
          count: {
            args: Prisma.TradeOfferCountArgs<ExtArgs>
            result: $Utils.Optional<TradeOfferCountAggregateOutputType> | number
          }
        }
      }
      TradeOfferItem: {
        payload: Prisma.$TradeOfferItemPayload<ExtArgs>
        fields: Prisma.TradeOfferItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TradeOfferItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradeOfferItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TradeOfferItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradeOfferItemPayload>
          }
          findFirst: {
            args: Prisma.TradeOfferItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradeOfferItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TradeOfferItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradeOfferItemPayload>
          }
          findMany: {
            args: Prisma.TradeOfferItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradeOfferItemPayload>[]
          }
          create: {
            args: Prisma.TradeOfferItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradeOfferItemPayload>
          }
          createMany: {
            args: Prisma.TradeOfferItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TradeOfferItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradeOfferItemPayload>[]
          }
          delete: {
            args: Prisma.TradeOfferItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradeOfferItemPayload>
          }
          update: {
            args: Prisma.TradeOfferItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradeOfferItemPayload>
          }
          deleteMany: {
            args: Prisma.TradeOfferItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TradeOfferItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TradeOfferItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradeOfferItemPayload>[]
          }
          upsert: {
            args: Prisma.TradeOfferItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradeOfferItemPayload>
          }
          aggregate: {
            args: Prisma.TradeOfferItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTradeOfferItem>
          }
          groupBy: {
            args: Prisma.TradeOfferItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<TradeOfferItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.TradeOfferItemCountArgs<ExtArgs>
            result: $Utils.Optional<TradeOfferItemCountAggregateOutputType> | number
          }
        }
      }
      OfferProposal: {
        payload: Prisma.$OfferProposalPayload<ExtArgs>
        fields: Prisma.OfferProposalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OfferProposalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferProposalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OfferProposalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferProposalPayload>
          }
          findFirst: {
            args: Prisma.OfferProposalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferProposalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OfferProposalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferProposalPayload>
          }
          findMany: {
            args: Prisma.OfferProposalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferProposalPayload>[]
          }
          create: {
            args: Prisma.OfferProposalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferProposalPayload>
          }
          createMany: {
            args: Prisma.OfferProposalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OfferProposalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferProposalPayload>[]
          }
          delete: {
            args: Prisma.OfferProposalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferProposalPayload>
          }
          update: {
            args: Prisma.OfferProposalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferProposalPayload>
          }
          deleteMany: {
            args: Prisma.OfferProposalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OfferProposalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OfferProposalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferProposalPayload>[]
          }
          upsert: {
            args: Prisma.OfferProposalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferProposalPayload>
          }
          aggregate: {
            args: Prisma.OfferProposalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOfferProposal>
          }
          groupBy: {
            args: Prisma.OfferProposalGroupByArgs<ExtArgs>
            result: $Utils.Optional<OfferProposalGroupByOutputType>[]
          }
          count: {
            args: Prisma.OfferProposalCountArgs<ExtArgs>
            result: $Utils.Optional<OfferProposalCountAggregateOutputType> | number
          }
        }
      }
      ProposalItem: {
        payload: Prisma.$ProposalItemPayload<ExtArgs>
        fields: Prisma.ProposalItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProposalItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProposalItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalItemPayload>
          }
          findFirst: {
            args: Prisma.ProposalItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProposalItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalItemPayload>
          }
          findMany: {
            args: Prisma.ProposalItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalItemPayload>[]
          }
          create: {
            args: Prisma.ProposalItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalItemPayload>
          }
          createMany: {
            args: Prisma.ProposalItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProposalItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalItemPayload>[]
          }
          delete: {
            args: Prisma.ProposalItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalItemPayload>
          }
          update: {
            args: Prisma.ProposalItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalItemPayload>
          }
          deleteMany: {
            args: Prisma.ProposalItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProposalItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProposalItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalItemPayload>[]
          }
          upsert: {
            args: Prisma.ProposalItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalItemPayload>
          }
          aggregate: {
            args: Prisma.ProposalItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProposalItem>
          }
          groupBy: {
            args: Prisma.ProposalItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProposalItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProposalItemCountArgs<ExtArgs>
            result: $Utils.Optional<ProposalItemCountAggregateOutputType> | number
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
    item?: ItemOmit
    tradeOffer?: TradeOfferOmit
    tradeOfferItem?: TradeOfferItemOmit
    offerProposal?: OfferProposalOmit
    proposalItem?: ProposalItemOmit
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
    items: number
    tradeOffers: number
    proposals: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | UserCountOutputTypeCountItemsArgs
    tradeOffers?: boolean | UserCountOutputTypeCountTradeOffersArgs
    proposals?: boolean | UserCountOutputTypeCountProposalsArgs
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
  export type UserCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTradeOffersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TradeOfferWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProposalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfferProposalWhereInput
  }


  /**
   * Count Type TradeOfferCountOutputType
   */

  export type TradeOfferCountOutputType = {
    items: number
    proposals: number
  }

  export type TradeOfferCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | TradeOfferCountOutputTypeCountItemsArgs
    proposals?: boolean | TradeOfferCountOutputTypeCountProposalsArgs
  }

  // Custom InputTypes
  /**
   * TradeOfferCountOutputType without action
   */
  export type TradeOfferCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeOfferCountOutputType
     */
    select?: TradeOfferCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TradeOfferCountOutputType without action
   */
  export type TradeOfferCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TradeOfferItemWhereInput
  }

  /**
   * TradeOfferCountOutputType without action
   */
  export type TradeOfferCountOutputTypeCountProposalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfferProposalWhereInput
  }


  /**
   * Count Type OfferProposalCountOutputType
   */

  export type OfferProposalCountOutputType = {
    items: number
  }

  export type OfferProposalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | OfferProposalCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * OfferProposalCountOutputType without action
   */
  export type OfferProposalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferProposalCountOutputType
     */
    select?: OfferProposalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OfferProposalCountOutputType without action
   */
  export type OfferProposalCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProposalItemWhereInput
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
    email: string | null
    passwordHash: string | null
    name: string | null
    image: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    name: string | null
    image: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    name: number
    image: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    image?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    image?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    image?: true
    createdAt?: true
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
    email: string
    passwordHash: string
    name: string | null
    image: string | null
    createdAt: Date
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
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    image?: boolean
    createdAt?: boolean
    items?: boolean | User$itemsArgs<ExtArgs>
    tradeOffers?: boolean | User$tradeOffersArgs<ExtArgs>
    proposals?: boolean | User$proposalsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    image?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    image?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    image?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "name" | "image" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | User$itemsArgs<ExtArgs>
    tradeOffers?: boolean | User$tradeOffersArgs<ExtArgs>
    proposals?: boolean | User$proposalsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      items: Prisma.$ItemPayload<ExtArgs>[]
      tradeOffers: Prisma.$TradeOfferPayload<ExtArgs>[]
      proposals: Prisma.$OfferProposalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      name: string | null
      image: string | null
      createdAt: Date
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
    items<T extends User$itemsArgs<ExtArgs> = {}>(args?: Subset<T, User$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tradeOffers<T extends User$tradeOffersArgs<ExtArgs> = {}>(args?: Subset<T, User$tradeOffersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradeOfferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    proposals<T extends User$proposalsArgs<ExtArgs> = {}>(args?: Subset<T, User$proposalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferProposalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
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
   * User.items
   */
  export type User$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    cursor?: ItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * User.tradeOffers
   */
  export type User$tradeOffersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeOffer
     */
    select?: TradeOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradeOffer
     */
    omit?: TradeOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeOfferInclude<ExtArgs> | null
    where?: TradeOfferWhereInput
    orderBy?: TradeOfferOrderByWithRelationInput | TradeOfferOrderByWithRelationInput[]
    cursor?: TradeOfferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TradeOfferScalarFieldEnum | TradeOfferScalarFieldEnum[]
  }

  /**
   * User.proposals
   */
  export type User$proposalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferProposal
     */
    select?: OfferProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferProposal
     */
    omit?: OfferProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferProposalInclude<ExtArgs> | null
    where?: OfferProposalWhereInput
    orderBy?: OfferProposalOrderByWithRelationInput | OfferProposalOrderByWithRelationInput[]
    cursor?: OfferProposalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OfferProposalScalarFieldEnum | OfferProposalScalarFieldEnum[]
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
   * Model Item
   */

  export type AggregateItem = {
    _count: ItemCountAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  export type ItemMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    imageUrl: string | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItemMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    imageUrl: string | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItemCountAggregateOutputType = {
    id: number
    name: number
    description: number
    imageUrl: number
    ownerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ItemMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    imageUrl?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItemMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    imageUrl?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItemCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    imageUrl?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
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
    _min?: ItemMinAggregateInputType
    _max?: ItemMaxAggregateInputType
  }

  export type ItemGroupByOutputType = {
    id: string
    name: string
    description: string | null
    imageUrl: string | null
    ownerId: string
    createdAt: Date
    updatedAt: Date
    _count: ItemCountAggregateOutputType | null
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
    description?: boolean
    imageUrl?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    tradeOfferItem?: boolean | Item$tradeOfferItemArgs<ExtArgs>
    proposalItem?: boolean | Item$proposalItemArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    imageUrl?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    imageUrl?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    imageUrl?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "imageUrl" | "ownerId" | "createdAt" | "updatedAt", ExtArgs["result"]["item"]>
  export type ItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    tradeOfferItem?: boolean | Item$tradeOfferItemArgs<ExtArgs>
    proposalItem?: boolean | Item$proposalItemArgs<ExtArgs>
  }
  export type ItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Item"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      tradeOfferItem: Prisma.$TradeOfferItemPayload<ExtArgs> | null
      proposalItem: Prisma.$ProposalItemPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      imageUrl: string | null
      ownerId: string
      createdAt: Date
      updatedAt: Date
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
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tradeOfferItem<T extends Item$tradeOfferItemArgs<ExtArgs> = {}>(args?: Subset<T, Item$tradeOfferItemArgs<ExtArgs>>): Prisma__TradeOfferItemClient<$Result.GetResult<Prisma.$TradeOfferItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    proposalItem<T extends Item$proposalItemArgs<ExtArgs> = {}>(args?: Subset<T, Item$proposalItemArgs<ExtArgs>>): Prisma__ProposalItemClient<$Result.GetResult<Prisma.$ProposalItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly description: FieldRef<"Item", 'String'>
    readonly imageUrl: FieldRef<"Item", 'String'>
    readonly ownerId: FieldRef<"Item", 'String'>
    readonly createdAt: FieldRef<"Item", 'DateTime'>
    readonly updatedAt: FieldRef<"Item", 'DateTime'>
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * Item.tradeOfferItem
   */
  export type Item$tradeOfferItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeOfferItem
     */
    select?: TradeOfferItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradeOfferItem
     */
    omit?: TradeOfferItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeOfferItemInclude<ExtArgs> | null
    where?: TradeOfferItemWhereInput
  }

  /**
   * Item.proposalItem
   */
  export type Item$proposalItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalItem
     */
    select?: ProposalItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProposalItem
     */
    omit?: ProposalItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalItemInclude<ExtArgs> | null
    where?: ProposalItemWhereInput
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
   * Model TradeOffer
   */

  export type AggregateTradeOffer = {
    _count: TradeOfferCountAggregateOutputType | null
    _min: TradeOfferMinAggregateOutputType | null
    _max: TradeOfferMaxAggregateOutputType | null
  }

  export type TradeOfferMinAggregateOutputType = {
    id: string | null
    ownerId: string | null
    createdAt: Date | null
  }

  export type TradeOfferMaxAggregateOutputType = {
    id: string | null
    ownerId: string | null
    createdAt: Date | null
  }

  export type TradeOfferCountAggregateOutputType = {
    id: number
    ownerId: number
    createdAt: number
    _all: number
  }


  export type TradeOfferMinAggregateInputType = {
    id?: true
    ownerId?: true
    createdAt?: true
  }

  export type TradeOfferMaxAggregateInputType = {
    id?: true
    ownerId?: true
    createdAt?: true
  }

  export type TradeOfferCountAggregateInputType = {
    id?: true
    ownerId?: true
    createdAt?: true
    _all?: true
  }

  export type TradeOfferAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TradeOffer to aggregate.
     */
    where?: TradeOfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TradeOffers to fetch.
     */
    orderBy?: TradeOfferOrderByWithRelationInput | TradeOfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TradeOfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TradeOffers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TradeOffers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TradeOffers
    **/
    _count?: true | TradeOfferCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TradeOfferMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TradeOfferMaxAggregateInputType
  }

  export type GetTradeOfferAggregateType<T extends TradeOfferAggregateArgs> = {
        [P in keyof T & keyof AggregateTradeOffer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTradeOffer[P]>
      : GetScalarType<T[P], AggregateTradeOffer[P]>
  }




  export type TradeOfferGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TradeOfferWhereInput
    orderBy?: TradeOfferOrderByWithAggregationInput | TradeOfferOrderByWithAggregationInput[]
    by: TradeOfferScalarFieldEnum[] | TradeOfferScalarFieldEnum
    having?: TradeOfferScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TradeOfferCountAggregateInputType | true
    _min?: TradeOfferMinAggregateInputType
    _max?: TradeOfferMaxAggregateInputType
  }

  export type TradeOfferGroupByOutputType = {
    id: string
    ownerId: string
    createdAt: Date
    _count: TradeOfferCountAggregateOutputType | null
    _min: TradeOfferMinAggregateOutputType | null
    _max: TradeOfferMaxAggregateOutputType | null
  }

  type GetTradeOfferGroupByPayload<T extends TradeOfferGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TradeOfferGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TradeOfferGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TradeOfferGroupByOutputType[P]>
            : GetScalarType<T[P], TradeOfferGroupByOutputType[P]>
        }
      >
    >


  export type TradeOfferSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    createdAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | TradeOffer$itemsArgs<ExtArgs>
    proposals?: boolean | TradeOffer$proposalsArgs<ExtArgs>
    _count?: boolean | TradeOfferCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tradeOffer"]>

  export type TradeOfferSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    createdAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tradeOffer"]>

  export type TradeOfferSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    createdAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tradeOffer"]>

  export type TradeOfferSelectScalar = {
    id?: boolean
    ownerId?: boolean
    createdAt?: boolean
  }

  export type TradeOfferOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownerId" | "createdAt", ExtArgs["result"]["tradeOffer"]>
  export type TradeOfferInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | TradeOffer$itemsArgs<ExtArgs>
    proposals?: boolean | TradeOffer$proposalsArgs<ExtArgs>
    _count?: boolean | TradeOfferCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TradeOfferIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TradeOfferIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TradeOfferPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TradeOffer"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      items: Prisma.$TradeOfferItemPayload<ExtArgs>[]
      proposals: Prisma.$OfferProposalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ownerId: string
      createdAt: Date
    }, ExtArgs["result"]["tradeOffer"]>
    composites: {}
  }

  type TradeOfferGetPayload<S extends boolean | null | undefined | TradeOfferDefaultArgs> = $Result.GetResult<Prisma.$TradeOfferPayload, S>

  type TradeOfferCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TradeOfferFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TradeOfferCountAggregateInputType | true
    }

  export interface TradeOfferDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TradeOffer'], meta: { name: 'TradeOffer' } }
    /**
     * Find zero or one TradeOffer that matches the filter.
     * @param {TradeOfferFindUniqueArgs} args - Arguments to find a TradeOffer
     * @example
     * // Get one TradeOffer
     * const tradeOffer = await prisma.tradeOffer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TradeOfferFindUniqueArgs>(args: SelectSubset<T, TradeOfferFindUniqueArgs<ExtArgs>>): Prisma__TradeOfferClient<$Result.GetResult<Prisma.$TradeOfferPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TradeOffer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TradeOfferFindUniqueOrThrowArgs} args - Arguments to find a TradeOffer
     * @example
     * // Get one TradeOffer
     * const tradeOffer = await prisma.tradeOffer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TradeOfferFindUniqueOrThrowArgs>(args: SelectSubset<T, TradeOfferFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TradeOfferClient<$Result.GetResult<Prisma.$TradeOfferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TradeOffer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeOfferFindFirstArgs} args - Arguments to find a TradeOffer
     * @example
     * // Get one TradeOffer
     * const tradeOffer = await prisma.tradeOffer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TradeOfferFindFirstArgs>(args?: SelectSubset<T, TradeOfferFindFirstArgs<ExtArgs>>): Prisma__TradeOfferClient<$Result.GetResult<Prisma.$TradeOfferPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TradeOffer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeOfferFindFirstOrThrowArgs} args - Arguments to find a TradeOffer
     * @example
     * // Get one TradeOffer
     * const tradeOffer = await prisma.tradeOffer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TradeOfferFindFirstOrThrowArgs>(args?: SelectSubset<T, TradeOfferFindFirstOrThrowArgs<ExtArgs>>): Prisma__TradeOfferClient<$Result.GetResult<Prisma.$TradeOfferPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TradeOffers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeOfferFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TradeOffers
     * const tradeOffers = await prisma.tradeOffer.findMany()
     * 
     * // Get first 10 TradeOffers
     * const tradeOffers = await prisma.tradeOffer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tradeOfferWithIdOnly = await prisma.tradeOffer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TradeOfferFindManyArgs>(args?: SelectSubset<T, TradeOfferFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradeOfferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TradeOffer.
     * @param {TradeOfferCreateArgs} args - Arguments to create a TradeOffer.
     * @example
     * // Create one TradeOffer
     * const TradeOffer = await prisma.tradeOffer.create({
     *   data: {
     *     // ... data to create a TradeOffer
     *   }
     * })
     * 
     */
    create<T extends TradeOfferCreateArgs>(args: SelectSubset<T, TradeOfferCreateArgs<ExtArgs>>): Prisma__TradeOfferClient<$Result.GetResult<Prisma.$TradeOfferPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TradeOffers.
     * @param {TradeOfferCreateManyArgs} args - Arguments to create many TradeOffers.
     * @example
     * // Create many TradeOffers
     * const tradeOffer = await prisma.tradeOffer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TradeOfferCreateManyArgs>(args?: SelectSubset<T, TradeOfferCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TradeOffers and returns the data saved in the database.
     * @param {TradeOfferCreateManyAndReturnArgs} args - Arguments to create many TradeOffers.
     * @example
     * // Create many TradeOffers
     * const tradeOffer = await prisma.tradeOffer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TradeOffers and only return the `id`
     * const tradeOfferWithIdOnly = await prisma.tradeOffer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TradeOfferCreateManyAndReturnArgs>(args?: SelectSubset<T, TradeOfferCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradeOfferPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TradeOffer.
     * @param {TradeOfferDeleteArgs} args - Arguments to delete one TradeOffer.
     * @example
     * // Delete one TradeOffer
     * const TradeOffer = await prisma.tradeOffer.delete({
     *   where: {
     *     // ... filter to delete one TradeOffer
     *   }
     * })
     * 
     */
    delete<T extends TradeOfferDeleteArgs>(args: SelectSubset<T, TradeOfferDeleteArgs<ExtArgs>>): Prisma__TradeOfferClient<$Result.GetResult<Prisma.$TradeOfferPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TradeOffer.
     * @param {TradeOfferUpdateArgs} args - Arguments to update one TradeOffer.
     * @example
     * // Update one TradeOffer
     * const tradeOffer = await prisma.tradeOffer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TradeOfferUpdateArgs>(args: SelectSubset<T, TradeOfferUpdateArgs<ExtArgs>>): Prisma__TradeOfferClient<$Result.GetResult<Prisma.$TradeOfferPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TradeOffers.
     * @param {TradeOfferDeleteManyArgs} args - Arguments to filter TradeOffers to delete.
     * @example
     * // Delete a few TradeOffers
     * const { count } = await prisma.tradeOffer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TradeOfferDeleteManyArgs>(args?: SelectSubset<T, TradeOfferDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TradeOffers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeOfferUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TradeOffers
     * const tradeOffer = await prisma.tradeOffer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TradeOfferUpdateManyArgs>(args: SelectSubset<T, TradeOfferUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TradeOffers and returns the data updated in the database.
     * @param {TradeOfferUpdateManyAndReturnArgs} args - Arguments to update many TradeOffers.
     * @example
     * // Update many TradeOffers
     * const tradeOffer = await prisma.tradeOffer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TradeOffers and only return the `id`
     * const tradeOfferWithIdOnly = await prisma.tradeOffer.updateManyAndReturn({
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
    updateManyAndReturn<T extends TradeOfferUpdateManyAndReturnArgs>(args: SelectSubset<T, TradeOfferUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradeOfferPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TradeOffer.
     * @param {TradeOfferUpsertArgs} args - Arguments to update or create a TradeOffer.
     * @example
     * // Update or create a TradeOffer
     * const tradeOffer = await prisma.tradeOffer.upsert({
     *   create: {
     *     // ... data to create a TradeOffer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TradeOffer we want to update
     *   }
     * })
     */
    upsert<T extends TradeOfferUpsertArgs>(args: SelectSubset<T, TradeOfferUpsertArgs<ExtArgs>>): Prisma__TradeOfferClient<$Result.GetResult<Prisma.$TradeOfferPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TradeOffers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeOfferCountArgs} args - Arguments to filter TradeOffers to count.
     * @example
     * // Count the number of TradeOffers
     * const count = await prisma.tradeOffer.count({
     *   where: {
     *     // ... the filter for the TradeOffers we want to count
     *   }
     * })
    **/
    count<T extends TradeOfferCountArgs>(
      args?: Subset<T, TradeOfferCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TradeOfferCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TradeOffer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeOfferAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TradeOfferAggregateArgs>(args: Subset<T, TradeOfferAggregateArgs>): Prisma.PrismaPromise<GetTradeOfferAggregateType<T>>

    /**
     * Group by TradeOffer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeOfferGroupByArgs} args - Group by arguments.
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
      T extends TradeOfferGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TradeOfferGroupByArgs['orderBy'] }
        : { orderBy?: TradeOfferGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TradeOfferGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTradeOfferGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TradeOffer model
   */
  readonly fields: TradeOfferFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TradeOffer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TradeOfferClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends TradeOffer$itemsArgs<ExtArgs> = {}>(args?: Subset<T, TradeOffer$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradeOfferItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    proposals<T extends TradeOffer$proposalsArgs<ExtArgs> = {}>(args?: Subset<T, TradeOffer$proposalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferProposalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TradeOffer model
   */
  interface TradeOfferFieldRefs {
    readonly id: FieldRef<"TradeOffer", 'String'>
    readonly ownerId: FieldRef<"TradeOffer", 'String'>
    readonly createdAt: FieldRef<"TradeOffer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TradeOffer findUnique
   */
  export type TradeOfferFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeOffer
     */
    select?: TradeOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradeOffer
     */
    omit?: TradeOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeOfferInclude<ExtArgs> | null
    /**
     * Filter, which TradeOffer to fetch.
     */
    where: TradeOfferWhereUniqueInput
  }

  /**
   * TradeOffer findUniqueOrThrow
   */
  export type TradeOfferFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeOffer
     */
    select?: TradeOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradeOffer
     */
    omit?: TradeOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeOfferInclude<ExtArgs> | null
    /**
     * Filter, which TradeOffer to fetch.
     */
    where: TradeOfferWhereUniqueInput
  }

  /**
   * TradeOffer findFirst
   */
  export type TradeOfferFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeOffer
     */
    select?: TradeOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradeOffer
     */
    omit?: TradeOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeOfferInclude<ExtArgs> | null
    /**
     * Filter, which TradeOffer to fetch.
     */
    where?: TradeOfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TradeOffers to fetch.
     */
    orderBy?: TradeOfferOrderByWithRelationInput | TradeOfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TradeOffers.
     */
    cursor?: TradeOfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TradeOffers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TradeOffers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TradeOffers.
     */
    distinct?: TradeOfferScalarFieldEnum | TradeOfferScalarFieldEnum[]
  }

  /**
   * TradeOffer findFirstOrThrow
   */
  export type TradeOfferFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeOffer
     */
    select?: TradeOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradeOffer
     */
    omit?: TradeOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeOfferInclude<ExtArgs> | null
    /**
     * Filter, which TradeOffer to fetch.
     */
    where?: TradeOfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TradeOffers to fetch.
     */
    orderBy?: TradeOfferOrderByWithRelationInput | TradeOfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TradeOffers.
     */
    cursor?: TradeOfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TradeOffers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TradeOffers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TradeOffers.
     */
    distinct?: TradeOfferScalarFieldEnum | TradeOfferScalarFieldEnum[]
  }

  /**
   * TradeOffer findMany
   */
  export type TradeOfferFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeOffer
     */
    select?: TradeOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradeOffer
     */
    omit?: TradeOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeOfferInclude<ExtArgs> | null
    /**
     * Filter, which TradeOffers to fetch.
     */
    where?: TradeOfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TradeOffers to fetch.
     */
    orderBy?: TradeOfferOrderByWithRelationInput | TradeOfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TradeOffers.
     */
    cursor?: TradeOfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TradeOffers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TradeOffers.
     */
    skip?: number
    distinct?: TradeOfferScalarFieldEnum | TradeOfferScalarFieldEnum[]
  }

  /**
   * TradeOffer create
   */
  export type TradeOfferCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeOffer
     */
    select?: TradeOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradeOffer
     */
    omit?: TradeOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeOfferInclude<ExtArgs> | null
    /**
     * The data needed to create a TradeOffer.
     */
    data: XOR<TradeOfferCreateInput, TradeOfferUncheckedCreateInput>
  }

  /**
   * TradeOffer createMany
   */
  export type TradeOfferCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TradeOffers.
     */
    data: TradeOfferCreateManyInput | TradeOfferCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TradeOffer createManyAndReturn
   */
  export type TradeOfferCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeOffer
     */
    select?: TradeOfferSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TradeOffer
     */
    omit?: TradeOfferOmit<ExtArgs> | null
    /**
     * The data used to create many TradeOffers.
     */
    data: TradeOfferCreateManyInput | TradeOfferCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeOfferIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TradeOffer update
   */
  export type TradeOfferUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeOffer
     */
    select?: TradeOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradeOffer
     */
    omit?: TradeOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeOfferInclude<ExtArgs> | null
    /**
     * The data needed to update a TradeOffer.
     */
    data: XOR<TradeOfferUpdateInput, TradeOfferUncheckedUpdateInput>
    /**
     * Choose, which TradeOffer to update.
     */
    where: TradeOfferWhereUniqueInput
  }

  /**
   * TradeOffer updateMany
   */
  export type TradeOfferUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TradeOffers.
     */
    data: XOR<TradeOfferUpdateManyMutationInput, TradeOfferUncheckedUpdateManyInput>
    /**
     * Filter which TradeOffers to update
     */
    where?: TradeOfferWhereInput
    /**
     * Limit how many TradeOffers to update.
     */
    limit?: number
  }

  /**
   * TradeOffer updateManyAndReturn
   */
  export type TradeOfferUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeOffer
     */
    select?: TradeOfferSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TradeOffer
     */
    omit?: TradeOfferOmit<ExtArgs> | null
    /**
     * The data used to update TradeOffers.
     */
    data: XOR<TradeOfferUpdateManyMutationInput, TradeOfferUncheckedUpdateManyInput>
    /**
     * Filter which TradeOffers to update
     */
    where?: TradeOfferWhereInput
    /**
     * Limit how many TradeOffers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeOfferIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TradeOffer upsert
   */
  export type TradeOfferUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeOffer
     */
    select?: TradeOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradeOffer
     */
    omit?: TradeOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeOfferInclude<ExtArgs> | null
    /**
     * The filter to search for the TradeOffer to update in case it exists.
     */
    where: TradeOfferWhereUniqueInput
    /**
     * In case the TradeOffer found by the `where` argument doesn't exist, create a new TradeOffer with this data.
     */
    create: XOR<TradeOfferCreateInput, TradeOfferUncheckedCreateInput>
    /**
     * In case the TradeOffer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TradeOfferUpdateInput, TradeOfferUncheckedUpdateInput>
  }

  /**
   * TradeOffer delete
   */
  export type TradeOfferDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeOffer
     */
    select?: TradeOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradeOffer
     */
    omit?: TradeOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeOfferInclude<ExtArgs> | null
    /**
     * Filter which TradeOffer to delete.
     */
    where: TradeOfferWhereUniqueInput
  }

  /**
   * TradeOffer deleteMany
   */
  export type TradeOfferDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TradeOffers to delete
     */
    where?: TradeOfferWhereInput
    /**
     * Limit how many TradeOffers to delete.
     */
    limit?: number
  }

  /**
   * TradeOffer.items
   */
  export type TradeOffer$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeOfferItem
     */
    select?: TradeOfferItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradeOfferItem
     */
    omit?: TradeOfferItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeOfferItemInclude<ExtArgs> | null
    where?: TradeOfferItemWhereInput
    orderBy?: TradeOfferItemOrderByWithRelationInput | TradeOfferItemOrderByWithRelationInput[]
    cursor?: TradeOfferItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TradeOfferItemScalarFieldEnum | TradeOfferItemScalarFieldEnum[]
  }

  /**
   * TradeOffer.proposals
   */
  export type TradeOffer$proposalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferProposal
     */
    select?: OfferProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferProposal
     */
    omit?: OfferProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferProposalInclude<ExtArgs> | null
    where?: OfferProposalWhereInput
    orderBy?: OfferProposalOrderByWithRelationInput | OfferProposalOrderByWithRelationInput[]
    cursor?: OfferProposalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OfferProposalScalarFieldEnum | OfferProposalScalarFieldEnum[]
  }

  /**
   * TradeOffer without action
   */
  export type TradeOfferDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeOffer
     */
    select?: TradeOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradeOffer
     */
    omit?: TradeOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeOfferInclude<ExtArgs> | null
  }


  /**
   * Model TradeOfferItem
   */

  export type AggregateTradeOfferItem = {
    _count: TradeOfferItemCountAggregateOutputType | null
    _min: TradeOfferItemMinAggregateOutputType | null
    _max: TradeOfferItemMaxAggregateOutputType | null
  }

  export type TradeOfferItemMinAggregateOutputType = {
    id: string | null
    tradeOfferId: string | null
    itemId: string | null
  }

  export type TradeOfferItemMaxAggregateOutputType = {
    id: string | null
    tradeOfferId: string | null
    itemId: string | null
  }

  export type TradeOfferItemCountAggregateOutputType = {
    id: number
    tradeOfferId: number
    itemId: number
    _all: number
  }


  export type TradeOfferItemMinAggregateInputType = {
    id?: true
    tradeOfferId?: true
    itemId?: true
  }

  export type TradeOfferItemMaxAggregateInputType = {
    id?: true
    tradeOfferId?: true
    itemId?: true
  }

  export type TradeOfferItemCountAggregateInputType = {
    id?: true
    tradeOfferId?: true
    itemId?: true
    _all?: true
  }

  export type TradeOfferItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TradeOfferItem to aggregate.
     */
    where?: TradeOfferItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TradeOfferItems to fetch.
     */
    orderBy?: TradeOfferItemOrderByWithRelationInput | TradeOfferItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TradeOfferItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TradeOfferItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TradeOfferItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TradeOfferItems
    **/
    _count?: true | TradeOfferItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TradeOfferItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TradeOfferItemMaxAggregateInputType
  }

  export type GetTradeOfferItemAggregateType<T extends TradeOfferItemAggregateArgs> = {
        [P in keyof T & keyof AggregateTradeOfferItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTradeOfferItem[P]>
      : GetScalarType<T[P], AggregateTradeOfferItem[P]>
  }




  export type TradeOfferItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TradeOfferItemWhereInput
    orderBy?: TradeOfferItemOrderByWithAggregationInput | TradeOfferItemOrderByWithAggregationInput[]
    by: TradeOfferItemScalarFieldEnum[] | TradeOfferItemScalarFieldEnum
    having?: TradeOfferItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TradeOfferItemCountAggregateInputType | true
    _min?: TradeOfferItemMinAggregateInputType
    _max?: TradeOfferItemMaxAggregateInputType
  }

  export type TradeOfferItemGroupByOutputType = {
    id: string
    tradeOfferId: string
    itemId: string
    _count: TradeOfferItemCountAggregateOutputType | null
    _min: TradeOfferItemMinAggregateOutputType | null
    _max: TradeOfferItemMaxAggregateOutputType | null
  }

  type GetTradeOfferItemGroupByPayload<T extends TradeOfferItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TradeOfferItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TradeOfferItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TradeOfferItemGroupByOutputType[P]>
            : GetScalarType<T[P], TradeOfferItemGroupByOutputType[P]>
        }
      >
    >


  export type TradeOfferItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tradeOfferId?: boolean
    itemId?: boolean
    tradeOffer?: boolean | TradeOfferDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tradeOfferItem"]>

  export type TradeOfferItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tradeOfferId?: boolean
    itemId?: boolean
    tradeOffer?: boolean | TradeOfferDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tradeOfferItem"]>

  export type TradeOfferItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tradeOfferId?: boolean
    itemId?: boolean
    tradeOffer?: boolean | TradeOfferDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tradeOfferItem"]>

  export type TradeOfferItemSelectScalar = {
    id?: boolean
    tradeOfferId?: boolean
    itemId?: boolean
  }

  export type TradeOfferItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tradeOfferId" | "itemId", ExtArgs["result"]["tradeOfferItem"]>
  export type TradeOfferItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tradeOffer?: boolean | TradeOfferDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }
  export type TradeOfferItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tradeOffer?: boolean | TradeOfferDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }
  export type TradeOfferItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tradeOffer?: boolean | TradeOfferDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }

  export type $TradeOfferItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TradeOfferItem"
    objects: {
      tradeOffer: Prisma.$TradeOfferPayload<ExtArgs>
      item: Prisma.$ItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tradeOfferId: string
      itemId: string
    }, ExtArgs["result"]["tradeOfferItem"]>
    composites: {}
  }

  type TradeOfferItemGetPayload<S extends boolean | null | undefined | TradeOfferItemDefaultArgs> = $Result.GetResult<Prisma.$TradeOfferItemPayload, S>

  type TradeOfferItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TradeOfferItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TradeOfferItemCountAggregateInputType | true
    }

  export interface TradeOfferItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TradeOfferItem'], meta: { name: 'TradeOfferItem' } }
    /**
     * Find zero or one TradeOfferItem that matches the filter.
     * @param {TradeOfferItemFindUniqueArgs} args - Arguments to find a TradeOfferItem
     * @example
     * // Get one TradeOfferItem
     * const tradeOfferItem = await prisma.tradeOfferItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TradeOfferItemFindUniqueArgs>(args: SelectSubset<T, TradeOfferItemFindUniqueArgs<ExtArgs>>): Prisma__TradeOfferItemClient<$Result.GetResult<Prisma.$TradeOfferItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TradeOfferItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TradeOfferItemFindUniqueOrThrowArgs} args - Arguments to find a TradeOfferItem
     * @example
     * // Get one TradeOfferItem
     * const tradeOfferItem = await prisma.tradeOfferItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TradeOfferItemFindUniqueOrThrowArgs>(args: SelectSubset<T, TradeOfferItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TradeOfferItemClient<$Result.GetResult<Prisma.$TradeOfferItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TradeOfferItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeOfferItemFindFirstArgs} args - Arguments to find a TradeOfferItem
     * @example
     * // Get one TradeOfferItem
     * const tradeOfferItem = await prisma.tradeOfferItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TradeOfferItemFindFirstArgs>(args?: SelectSubset<T, TradeOfferItemFindFirstArgs<ExtArgs>>): Prisma__TradeOfferItemClient<$Result.GetResult<Prisma.$TradeOfferItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TradeOfferItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeOfferItemFindFirstOrThrowArgs} args - Arguments to find a TradeOfferItem
     * @example
     * // Get one TradeOfferItem
     * const tradeOfferItem = await prisma.tradeOfferItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TradeOfferItemFindFirstOrThrowArgs>(args?: SelectSubset<T, TradeOfferItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__TradeOfferItemClient<$Result.GetResult<Prisma.$TradeOfferItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TradeOfferItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeOfferItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TradeOfferItems
     * const tradeOfferItems = await prisma.tradeOfferItem.findMany()
     * 
     * // Get first 10 TradeOfferItems
     * const tradeOfferItems = await prisma.tradeOfferItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tradeOfferItemWithIdOnly = await prisma.tradeOfferItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TradeOfferItemFindManyArgs>(args?: SelectSubset<T, TradeOfferItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradeOfferItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TradeOfferItem.
     * @param {TradeOfferItemCreateArgs} args - Arguments to create a TradeOfferItem.
     * @example
     * // Create one TradeOfferItem
     * const TradeOfferItem = await prisma.tradeOfferItem.create({
     *   data: {
     *     // ... data to create a TradeOfferItem
     *   }
     * })
     * 
     */
    create<T extends TradeOfferItemCreateArgs>(args: SelectSubset<T, TradeOfferItemCreateArgs<ExtArgs>>): Prisma__TradeOfferItemClient<$Result.GetResult<Prisma.$TradeOfferItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TradeOfferItems.
     * @param {TradeOfferItemCreateManyArgs} args - Arguments to create many TradeOfferItems.
     * @example
     * // Create many TradeOfferItems
     * const tradeOfferItem = await prisma.tradeOfferItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TradeOfferItemCreateManyArgs>(args?: SelectSubset<T, TradeOfferItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TradeOfferItems and returns the data saved in the database.
     * @param {TradeOfferItemCreateManyAndReturnArgs} args - Arguments to create many TradeOfferItems.
     * @example
     * // Create many TradeOfferItems
     * const tradeOfferItem = await prisma.tradeOfferItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TradeOfferItems and only return the `id`
     * const tradeOfferItemWithIdOnly = await prisma.tradeOfferItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TradeOfferItemCreateManyAndReturnArgs>(args?: SelectSubset<T, TradeOfferItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradeOfferItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TradeOfferItem.
     * @param {TradeOfferItemDeleteArgs} args - Arguments to delete one TradeOfferItem.
     * @example
     * // Delete one TradeOfferItem
     * const TradeOfferItem = await prisma.tradeOfferItem.delete({
     *   where: {
     *     // ... filter to delete one TradeOfferItem
     *   }
     * })
     * 
     */
    delete<T extends TradeOfferItemDeleteArgs>(args: SelectSubset<T, TradeOfferItemDeleteArgs<ExtArgs>>): Prisma__TradeOfferItemClient<$Result.GetResult<Prisma.$TradeOfferItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TradeOfferItem.
     * @param {TradeOfferItemUpdateArgs} args - Arguments to update one TradeOfferItem.
     * @example
     * // Update one TradeOfferItem
     * const tradeOfferItem = await prisma.tradeOfferItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TradeOfferItemUpdateArgs>(args: SelectSubset<T, TradeOfferItemUpdateArgs<ExtArgs>>): Prisma__TradeOfferItemClient<$Result.GetResult<Prisma.$TradeOfferItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TradeOfferItems.
     * @param {TradeOfferItemDeleteManyArgs} args - Arguments to filter TradeOfferItems to delete.
     * @example
     * // Delete a few TradeOfferItems
     * const { count } = await prisma.tradeOfferItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TradeOfferItemDeleteManyArgs>(args?: SelectSubset<T, TradeOfferItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TradeOfferItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeOfferItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TradeOfferItems
     * const tradeOfferItem = await prisma.tradeOfferItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TradeOfferItemUpdateManyArgs>(args: SelectSubset<T, TradeOfferItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TradeOfferItems and returns the data updated in the database.
     * @param {TradeOfferItemUpdateManyAndReturnArgs} args - Arguments to update many TradeOfferItems.
     * @example
     * // Update many TradeOfferItems
     * const tradeOfferItem = await prisma.tradeOfferItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TradeOfferItems and only return the `id`
     * const tradeOfferItemWithIdOnly = await prisma.tradeOfferItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends TradeOfferItemUpdateManyAndReturnArgs>(args: SelectSubset<T, TradeOfferItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradeOfferItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TradeOfferItem.
     * @param {TradeOfferItemUpsertArgs} args - Arguments to update or create a TradeOfferItem.
     * @example
     * // Update or create a TradeOfferItem
     * const tradeOfferItem = await prisma.tradeOfferItem.upsert({
     *   create: {
     *     // ... data to create a TradeOfferItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TradeOfferItem we want to update
     *   }
     * })
     */
    upsert<T extends TradeOfferItemUpsertArgs>(args: SelectSubset<T, TradeOfferItemUpsertArgs<ExtArgs>>): Prisma__TradeOfferItemClient<$Result.GetResult<Prisma.$TradeOfferItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TradeOfferItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeOfferItemCountArgs} args - Arguments to filter TradeOfferItems to count.
     * @example
     * // Count the number of TradeOfferItems
     * const count = await prisma.tradeOfferItem.count({
     *   where: {
     *     // ... the filter for the TradeOfferItems we want to count
     *   }
     * })
    **/
    count<T extends TradeOfferItemCountArgs>(
      args?: Subset<T, TradeOfferItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TradeOfferItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TradeOfferItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeOfferItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TradeOfferItemAggregateArgs>(args: Subset<T, TradeOfferItemAggregateArgs>): Prisma.PrismaPromise<GetTradeOfferItemAggregateType<T>>

    /**
     * Group by TradeOfferItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeOfferItemGroupByArgs} args - Group by arguments.
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
      T extends TradeOfferItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TradeOfferItemGroupByArgs['orderBy'] }
        : { orderBy?: TradeOfferItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TradeOfferItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTradeOfferItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TradeOfferItem model
   */
  readonly fields: TradeOfferItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TradeOfferItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TradeOfferItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tradeOffer<T extends TradeOfferDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TradeOfferDefaultArgs<ExtArgs>>): Prisma__TradeOfferClient<$Result.GetResult<Prisma.$TradeOfferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    item<T extends ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemDefaultArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TradeOfferItem model
   */
  interface TradeOfferItemFieldRefs {
    readonly id: FieldRef<"TradeOfferItem", 'String'>
    readonly tradeOfferId: FieldRef<"TradeOfferItem", 'String'>
    readonly itemId: FieldRef<"TradeOfferItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TradeOfferItem findUnique
   */
  export type TradeOfferItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeOfferItem
     */
    select?: TradeOfferItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradeOfferItem
     */
    omit?: TradeOfferItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeOfferItemInclude<ExtArgs> | null
    /**
     * Filter, which TradeOfferItem to fetch.
     */
    where: TradeOfferItemWhereUniqueInput
  }

  /**
   * TradeOfferItem findUniqueOrThrow
   */
  export type TradeOfferItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeOfferItem
     */
    select?: TradeOfferItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradeOfferItem
     */
    omit?: TradeOfferItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeOfferItemInclude<ExtArgs> | null
    /**
     * Filter, which TradeOfferItem to fetch.
     */
    where: TradeOfferItemWhereUniqueInput
  }

  /**
   * TradeOfferItem findFirst
   */
  export type TradeOfferItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeOfferItem
     */
    select?: TradeOfferItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradeOfferItem
     */
    omit?: TradeOfferItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeOfferItemInclude<ExtArgs> | null
    /**
     * Filter, which TradeOfferItem to fetch.
     */
    where?: TradeOfferItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TradeOfferItems to fetch.
     */
    orderBy?: TradeOfferItemOrderByWithRelationInput | TradeOfferItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TradeOfferItems.
     */
    cursor?: TradeOfferItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TradeOfferItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TradeOfferItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TradeOfferItems.
     */
    distinct?: TradeOfferItemScalarFieldEnum | TradeOfferItemScalarFieldEnum[]
  }

  /**
   * TradeOfferItem findFirstOrThrow
   */
  export type TradeOfferItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeOfferItem
     */
    select?: TradeOfferItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradeOfferItem
     */
    omit?: TradeOfferItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeOfferItemInclude<ExtArgs> | null
    /**
     * Filter, which TradeOfferItem to fetch.
     */
    where?: TradeOfferItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TradeOfferItems to fetch.
     */
    orderBy?: TradeOfferItemOrderByWithRelationInput | TradeOfferItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TradeOfferItems.
     */
    cursor?: TradeOfferItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TradeOfferItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TradeOfferItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TradeOfferItems.
     */
    distinct?: TradeOfferItemScalarFieldEnum | TradeOfferItemScalarFieldEnum[]
  }

  /**
   * TradeOfferItem findMany
   */
  export type TradeOfferItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeOfferItem
     */
    select?: TradeOfferItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradeOfferItem
     */
    omit?: TradeOfferItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeOfferItemInclude<ExtArgs> | null
    /**
     * Filter, which TradeOfferItems to fetch.
     */
    where?: TradeOfferItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TradeOfferItems to fetch.
     */
    orderBy?: TradeOfferItemOrderByWithRelationInput | TradeOfferItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TradeOfferItems.
     */
    cursor?: TradeOfferItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TradeOfferItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TradeOfferItems.
     */
    skip?: number
    distinct?: TradeOfferItemScalarFieldEnum | TradeOfferItemScalarFieldEnum[]
  }

  /**
   * TradeOfferItem create
   */
  export type TradeOfferItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeOfferItem
     */
    select?: TradeOfferItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradeOfferItem
     */
    omit?: TradeOfferItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeOfferItemInclude<ExtArgs> | null
    /**
     * The data needed to create a TradeOfferItem.
     */
    data: XOR<TradeOfferItemCreateInput, TradeOfferItemUncheckedCreateInput>
  }

  /**
   * TradeOfferItem createMany
   */
  export type TradeOfferItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TradeOfferItems.
     */
    data: TradeOfferItemCreateManyInput | TradeOfferItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TradeOfferItem createManyAndReturn
   */
  export type TradeOfferItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeOfferItem
     */
    select?: TradeOfferItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TradeOfferItem
     */
    omit?: TradeOfferItemOmit<ExtArgs> | null
    /**
     * The data used to create many TradeOfferItems.
     */
    data: TradeOfferItemCreateManyInput | TradeOfferItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeOfferItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TradeOfferItem update
   */
  export type TradeOfferItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeOfferItem
     */
    select?: TradeOfferItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradeOfferItem
     */
    omit?: TradeOfferItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeOfferItemInclude<ExtArgs> | null
    /**
     * The data needed to update a TradeOfferItem.
     */
    data: XOR<TradeOfferItemUpdateInput, TradeOfferItemUncheckedUpdateInput>
    /**
     * Choose, which TradeOfferItem to update.
     */
    where: TradeOfferItemWhereUniqueInput
  }

  /**
   * TradeOfferItem updateMany
   */
  export type TradeOfferItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TradeOfferItems.
     */
    data: XOR<TradeOfferItemUpdateManyMutationInput, TradeOfferItemUncheckedUpdateManyInput>
    /**
     * Filter which TradeOfferItems to update
     */
    where?: TradeOfferItemWhereInput
    /**
     * Limit how many TradeOfferItems to update.
     */
    limit?: number
  }

  /**
   * TradeOfferItem updateManyAndReturn
   */
  export type TradeOfferItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeOfferItem
     */
    select?: TradeOfferItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TradeOfferItem
     */
    omit?: TradeOfferItemOmit<ExtArgs> | null
    /**
     * The data used to update TradeOfferItems.
     */
    data: XOR<TradeOfferItemUpdateManyMutationInput, TradeOfferItemUncheckedUpdateManyInput>
    /**
     * Filter which TradeOfferItems to update
     */
    where?: TradeOfferItemWhereInput
    /**
     * Limit how many TradeOfferItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeOfferItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TradeOfferItem upsert
   */
  export type TradeOfferItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeOfferItem
     */
    select?: TradeOfferItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradeOfferItem
     */
    omit?: TradeOfferItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeOfferItemInclude<ExtArgs> | null
    /**
     * The filter to search for the TradeOfferItem to update in case it exists.
     */
    where: TradeOfferItemWhereUniqueInput
    /**
     * In case the TradeOfferItem found by the `where` argument doesn't exist, create a new TradeOfferItem with this data.
     */
    create: XOR<TradeOfferItemCreateInput, TradeOfferItemUncheckedCreateInput>
    /**
     * In case the TradeOfferItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TradeOfferItemUpdateInput, TradeOfferItemUncheckedUpdateInput>
  }

  /**
   * TradeOfferItem delete
   */
  export type TradeOfferItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeOfferItem
     */
    select?: TradeOfferItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradeOfferItem
     */
    omit?: TradeOfferItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeOfferItemInclude<ExtArgs> | null
    /**
     * Filter which TradeOfferItem to delete.
     */
    where: TradeOfferItemWhereUniqueInput
  }

  /**
   * TradeOfferItem deleteMany
   */
  export type TradeOfferItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TradeOfferItems to delete
     */
    where?: TradeOfferItemWhereInput
    /**
     * Limit how many TradeOfferItems to delete.
     */
    limit?: number
  }

  /**
   * TradeOfferItem without action
   */
  export type TradeOfferItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeOfferItem
     */
    select?: TradeOfferItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradeOfferItem
     */
    omit?: TradeOfferItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeOfferItemInclude<ExtArgs> | null
  }


  /**
   * Model OfferProposal
   */

  export type AggregateOfferProposal = {
    _count: OfferProposalCountAggregateOutputType | null
    _min: OfferProposalMinAggregateOutputType | null
    _max: OfferProposalMaxAggregateOutputType | null
  }

  export type OfferProposalMinAggregateOutputType = {
    id: string | null
    tradeOfferId: string | null
    proposerId: string | null
    status: string | null
    createdAt: Date | null
  }

  export type OfferProposalMaxAggregateOutputType = {
    id: string | null
    tradeOfferId: string | null
    proposerId: string | null
    status: string | null
    createdAt: Date | null
  }

  export type OfferProposalCountAggregateOutputType = {
    id: number
    tradeOfferId: number
    proposerId: number
    status: number
    createdAt: number
    _all: number
  }


  export type OfferProposalMinAggregateInputType = {
    id?: true
    tradeOfferId?: true
    proposerId?: true
    status?: true
    createdAt?: true
  }

  export type OfferProposalMaxAggregateInputType = {
    id?: true
    tradeOfferId?: true
    proposerId?: true
    status?: true
    createdAt?: true
  }

  export type OfferProposalCountAggregateInputType = {
    id?: true
    tradeOfferId?: true
    proposerId?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type OfferProposalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OfferProposal to aggregate.
     */
    where?: OfferProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfferProposals to fetch.
     */
    orderBy?: OfferProposalOrderByWithRelationInput | OfferProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OfferProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfferProposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfferProposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OfferProposals
    **/
    _count?: true | OfferProposalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OfferProposalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OfferProposalMaxAggregateInputType
  }

  export type GetOfferProposalAggregateType<T extends OfferProposalAggregateArgs> = {
        [P in keyof T & keyof AggregateOfferProposal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOfferProposal[P]>
      : GetScalarType<T[P], AggregateOfferProposal[P]>
  }




  export type OfferProposalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfferProposalWhereInput
    orderBy?: OfferProposalOrderByWithAggregationInput | OfferProposalOrderByWithAggregationInput[]
    by: OfferProposalScalarFieldEnum[] | OfferProposalScalarFieldEnum
    having?: OfferProposalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OfferProposalCountAggregateInputType | true
    _min?: OfferProposalMinAggregateInputType
    _max?: OfferProposalMaxAggregateInputType
  }

  export type OfferProposalGroupByOutputType = {
    id: string
    tradeOfferId: string
    proposerId: string
    status: string
    createdAt: Date
    _count: OfferProposalCountAggregateOutputType | null
    _min: OfferProposalMinAggregateOutputType | null
    _max: OfferProposalMaxAggregateOutputType | null
  }

  type GetOfferProposalGroupByPayload<T extends OfferProposalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OfferProposalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OfferProposalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OfferProposalGroupByOutputType[P]>
            : GetScalarType<T[P], OfferProposalGroupByOutputType[P]>
        }
      >
    >


  export type OfferProposalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tradeOfferId?: boolean
    proposerId?: boolean
    status?: boolean
    createdAt?: boolean
    tradeOffer?: boolean | TradeOfferDefaultArgs<ExtArgs>
    proposer?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | OfferProposal$itemsArgs<ExtArgs>
    _count?: boolean | OfferProposalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["offerProposal"]>

  export type OfferProposalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tradeOfferId?: boolean
    proposerId?: boolean
    status?: boolean
    createdAt?: boolean
    tradeOffer?: boolean | TradeOfferDefaultArgs<ExtArgs>
    proposer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["offerProposal"]>

  export type OfferProposalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tradeOfferId?: boolean
    proposerId?: boolean
    status?: boolean
    createdAt?: boolean
    tradeOffer?: boolean | TradeOfferDefaultArgs<ExtArgs>
    proposer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["offerProposal"]>

  export type OfferProposalSelectScalar = {
    id?: boolean
    tradeOfferId?: boolean
    proposerId?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type OfferProposalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tradeOfferId" | "proposerId" | "status" | "createdAt", ExtArgs["result"]["offerProposal"]>
  export type OfferProposalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tradeOffer?: boolean | TradeOfferDefaultArgs<ExtArgs>
    proposer?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | OfferProposal$itemsArgs<ExtArgs>
    _count?: boolean | OfferProposalCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OfferProposalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tradeOffer?: boolean | TradeOfferDefaultArgs<ExtArgs>
    proposer?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OfferProposalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tradeOffer?: boolean | TradeOfferDefaultArgs<ExtArgs>
    proposer?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OfferProposalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OfferProposal"
    objects: {
      tradeOffer: Prisma.$TradeOfferPayload<ExtArgs>
      proposer: Prisma.$UserPayload<ExtArgs>
      items: Prisma.$ProposalItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tradeOfferId: string
      proposerId: string
      status: string
      createdAt: Date
    }, ExtArgs["result"]["offerProposal"]>
    composites: {}
  }

  type OfferProposalGetPayload<S extends boolean | null | undefined | OfferProposalDefaultArgs> = $Result.GetResult<Prisma.$OfferProposalPayload, S>

  type OfferProposalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OfferProposalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OfferProposalCountAggregateInputType | true
    }

  export interface OfferProposalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OfferProposal'], meta: { name: 'OfferProposal' } }
    /**
     * Find zero or one OfferProposal that matches the filter.
     * @param {OfferProposalFindUniqueArgs} args - Arguments to find a OfferProposal
     * @example
     * // Get one OfferProposal
     * const offerProposal = await prisma.offerProposal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OfferProposalFindUniqueArgs>(args: SelectSubset<T, OfferProposalFindUniqueArgs<ExtArgs>>): Prisma__OfferProposalClient<$Result.GetResult<Prisma.$OfferProposalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OfferProposal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OfferProposalFindUniqueOrThrowArgs} args - Arguments to find a OfferProposal
     * @example
     * // Get one OfferProposal
     * const offerProposal = await prisma.offerProposal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OfferProposalFindUniqueOrThrowArgs>(args: SelectSubset<T, OfferProposalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OfferProposalClient<$Result.GetResult<Prisma.$OfferProposalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OfferProposal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferProposalFindFirstArgs} args - Arguments to find a OfferProposal
     * @example
     * // Get one OfferProposal
     * const offerProposal = await prisma.offerProposal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OfferProposalFindFirstArgs>(args?: SelectSubset<T, OfferProposalFindFirstArgs<ExtArgs>>): Prisma__OfferProposalClient<$Result.GetResult<Prisma.$OfferProposalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OfferProposal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferProposalFindFirstOrThrowArgs} args - Arguments to find a OfferProposal
     * @example
     * // Get one OfferProposal
     * const offerProposal = await prisma.offerProposal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OfferProposalFindFirstOrThrowArgs>(args?: SelectSubset<T, OfferProposalFindFirstOrThrowArgs<ExtArgs>>): Prisma__OfferProposalClient<$Result.GetResult<Prisma.$OfferProposalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OfferProposals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferProposalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OfferProposals
     * const offerProposals = await prisma.offerProposal.findMany()
     * 
     * // Get first 10 OfferProposals
     * const offerProposals = await prisma.offerProposal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const offerProposalWithIdOnly = await prisma.offerProposal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OfferProposalFindManyArgs>(args?: SelectSubset<T, OfferProposalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferProposalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OfferProposal.
     * @param {OfferProposalCreateArgs} args - Arguments to create a OfferProposal.
     * @example
     * // Create one OfferProposal
     * const OfferProposal = await prisma.offerProposal.create({
     *   data: {
     *     // ... data to create a OfferProposal
     *   }
     * })
     * 
     */
    create<T extends OfferProposalCreateArgs>(args: SelectSubset<T, OfferProposalCreateArgs<ExtArgs>>): Prisma__OfferProposalClient<$Result.GetResult<Prisma.$OfferProposalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OfferProposals.
     * @param {OfferProposalCreateManyArgs} args - Arguments to create many OfferProposals.
     * @example
     * // Create many OfferProposals
     * const offerProposal = await prisma.offerProposal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OfferProposalCreateManyArgs>(args?: SelectSubset<T, OfferProposalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OfferProposals and returns the data saved in the database.
     * @param {OfferProposalCreateManyAndReturnArgs} args - Arguments to create many OfferProposals.
     * @example
     * // Create many OfferProposals
     * const offerProposal = await prisma.offerProposal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OfferProposals and only return the `id`
     * const offerProposalWithIdOnly = await prisma.offerProposal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OfferProposalCreateManyAndReturnArgs>(args?: SelectSubset<T, OfferProposalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferProposalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OfferProposal.
     * @param {OfferProposalDeleteArgs} args - Arguments to delete one OfferProposal.
     * @example
     * // Delete one OfferProposal
     * const OfferProposal = await prisma.offerProposal.delete({
     *   where: {
     *     // ... filter to delete one OfferProposal
     *   }
     * })
     * 
     */
    delete<T extends OfferProposalDeleteArgs>(args: SelectSubset<T, OfferProposalDeleteArgs<ExtArgs>>): Prisma__OfferProposalClient<$Result.GetResult<Prisma.$OfferProposalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OfferProposal.
     * @param {OfferProposalUpdateArgs} args - Arguments to update one OfferProposal.
     * @example
     * // Update one OfferProposal
     * const offerProposal = await prisma.offerProposal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OfferProposalUpdateArgs>(args: SelectSubset<T, OfferProposalUpdateArgs<ExtArgs>>): Prisma__OfferProposalClient<$Result.GetResult<Prisma.$OfferProposalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OfferProposals.
     * @param {OfferProposalDeleteManyArgs} args - Arguments to filter OfferProposals to delete.
     * @example
     * // Delete a few OfferProposals
     * const { count } = await prisma.offerProposal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OfferProposalDeleteManyArgs>(args?: SelectSubset<T, OfferProposalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OfferProposals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferProposalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OfferProposals
     * const offerProposal = await prisma.offerProposal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OfferProposalUpdateManyArgs>(args: SelectSubset<T, OfferProposalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OfferProposals and returns the data updated in the database.
     * @param {OfferProposalUpdateManyAndReturnArgs} args - Arguments to update many OfferProposals.
     * @example
     * // Update many OfferProposals
     * const offerProposal = await prisma.offerProposal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OfferProposals and only return the `id`
     * const offerProposalWithIdOnly = await prisma.offerProposal.updateManyAndReturn({
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
    updateManyAndReturn<T extends OfferProposalUpdateManyAndReturnArgs>(args: SelectSubset<T, OfferProposalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferProposalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OfferProposal.
     * @param {OfferProposalUpsertArgs} args - Arguments to update or create a OfferProposal.
     * @example
     * // Update or create a OfferProposal
     * const offerProposal = await prisma.offerProposal.upsert({
     *   create: {
     *     // ... data to create a OfferProposal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OfferProposal we want to update
     *   }
     * })
     */
    upsert<T extends OfferProposalUpsertArgs>(args: SelectSubset<T, OfferProposalUpsertArgs<ExtArgs>>): Prisma__OfferProposalClient<$Result.GetResult<Prisma.$OfferProposalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OfferProposals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferProposalCountArgs} args - Arguments to filter OfferProposals to count.
     * @example
     * // Count the number of OfferProposals
     * const count = await prisma.offerProposal.count({
     *   where: {
     *     // ... the filter for the OfferProposals we want to count
     *   }
     * })
    **/
    count<T extends OfferProposalCountArgs>(
      args?: Subset<T, OfferProposalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OfferProposalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OfferProposal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferProposalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OfferProposalAggregateArgs>(args: Subset<T, OfferProposalAggregateArgs>): Prisma.PrismaPromise<GetOfferProposalAggregateType<T>>

    /**
     * Group by OfferProposal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferProposalGroupByArgs} args - Group by arguments.
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
      T extends OfferProposalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OfferProposalGroupByArgs['orderBy'] }
        : { orderBy?: OfferProposalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OfferProposalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOfferProposalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OfferProposal model
   */
  readonly fields: OfferProposalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OfferProposal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OfferProposalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tradeOffer<T extends TradeOfferDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TradeOfferDefaultArgs<ExtArgs>>): Prisma__TradeOfferClient<$Result.GetResult<Prisma.$TradeOfferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    proposer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends OfferProposal$itemsArgs<ExtArgs> = {}>(args?: Subset<T, OfferProposal$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposalItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the OfferProposal model
   */
  interface OfferProposalFieldRefs {
    readonly id: FieldRef<"OfferProposal", 'String'>
    readonly tradeOfferId: FieldRef<"OfferProposal", 'String'>
    readonly proposerId: FieldRef<"OfferProposal", 'String'>
    readonly status: FieldRef<"OfferProposal", 'String'>
    readonly createdAt: FieldRef<"OfferProposal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OfferProposal findUnique
   */
  export type OfferProposalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferProposal
     */
    select?: OfferProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferProposal
     */
    omit?: OfferProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferProposalInclude<ExtArgs> | null
    /**
     * Filter, which OfferProposal to fetch.
     */
    where: OfferProposalWhereUniqueInput
  }

  /**
   * OfferProposal findUniqueOrThrow
   */
  export type OfferProposalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferProposal
     */
    select?: OfferProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferProposal
     */
    omit?: OfferProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferProposalInclude<ExtArgs> | null
    /**
     * Filter, which OfferProposal to fetch.
     */
    where: OfferProposalWhereUniqueInput
  }

  /**
   * OfferProposal findFirst
   */
  export type OfferProposalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferProposal
     */
    select?: OfferProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferProposal
     */
    omit?: OfferProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferProposalInclude<ExtArgs> | null
    /**
     * Filter, which OfferProposal to fetch.
     */
    where?: OfferProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfferProposals to fetch.
     */
    orderBy?: OfferProposalOrderByWithRelationInput | OfferProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OfferProposals.
     */
    cursor?: OfferProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfferProposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfferProposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OfferProposals.
     */
    distinct?: OfferProposalScalarFieldEnum | OfferProposalScalarFieldEnum[]
  }

  /**
   * OfferProposal findFirstOrThrow
   */
  export type OfferProposalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferProposal
     */
    select?: OfferProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferProposal
     */
    omit?: OfferProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferProposalInclude<ExtArgs> | null
    /**
     * Filter, which OfferProposal to fetch.
     */
    where?: OfferProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfferProposals to fetch.
     */
    orderBy?: OfferProposalOrderByWithRelationInput | OfferProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OfferProposals.
     */
    cursor?: OfferProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfferProposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfferProposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OfferProposals.
     */
    distinct?: OfferProposalScalarFieldEnum | OfferProposalScalarFieldEnum[]
  }

  /**
   * OfferProposal findMany
   */
  export type OfferProposalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferProposal
     */
    select?: OfferProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferProposal
     */
    omit?: OfferProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferProposalInclude<ExtArgs> | null
    /**
     * Filter, which OfferProposals to fetch.
     */
    where?: OfferProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfferProposals to fetch.
     */
    orderBy?: OfferProposalOrderByWithRelationInput | OfferProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OfferProposals.
     */
    cursor?: OfferProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfferProposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfferProposals.
     */
    skip?: number
    distinct?: OfferProposalScalarFieldEnum | OfferProposalScalarFieldEnum[]
  }

  /**
   * OfferProposal create
   */
  export type OfferProposalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferProposal
     */
    select?: OfferProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferProposal
     */
    omit?: OfferProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferProposalInclude<ExtArgs> | null
    /**
     * The data needed to create a OfferProposal.
     */
    data: XOR<OfferProposalCreateInput, OfferProposalUncheckedCreateInput>
  }

  /**
   * OfferProposal createMany
   */
  export type OfferProposalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OfferProposals.
     */
    data: OfferProposalCreateManyInput | OfferProposalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OfferProposal createManyAndReturn
   */
  export type OfferProposalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferProposal
     */
    select?: OfferProposalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OfferProposal
     */
    omit?: OfferProposalOmit<ExtArgs> | null
    /**
     * The data used to create many OfferProposals.
     */
    data: OfferProposalCreateManyInput | OfferProposalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferProposalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OfferProposal update
   */
  export type OfferProposalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferProposal
     */
    select?: OfferProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferProposal
     */
    omit?: OfferProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferProposalInclude<ExtArgs> | null
    /**
     * The data needed to update a OfferProposal.
     */
    data: XOR<OfferProposalUpdateInput, OfferProposalUncheckedUpdateInput>
    /**
     * Choose, which OfferProposal to update.
     */
    where: OfferProposalWhereUniqueInput
  }

  /**
   * OfferProposal updateMany
   */
  export type OfferProposalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OfferProposals.
     */
    data: XOR<OfferProposalUpdateManyMutationInput, OfferProposalUncheckedUpdateManyInput>
    /**
     * Filter which OfferProposals to update
     */
    where?: OfferProposalWhereInput
    /**
     * Limit how many OfferProposals to update.
     */
    limit?: number
  }

  /**
   * OfferProposal updateManyAndReturn
   */
  export type OfferProposalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferProposal
     */
    select?: OfferProposalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OfferProposal
     */
    omit?: OfferProposalOmit<ExtArgs> | null
    /**
     * The data used to update OfferProposals.
     */
    data: XOR<OfferProposalUpdateManyMutationInput, OfferProposalUncheckedUpdateManyInput>
    /**
     * Filter which OfferProposals to update
     */
    where?: OfferProposalWhereInput
    /**
     * Limit how many OfferProposals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferProposalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OfferProposal upsert
   */
  export type OfferProposalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferProposal
     */
    select?: OfferProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferProposal
     */
    omit?: OfferProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferProposalInclude<ExtArgs> | null
    /**
     * The filter to search for the OfferProposal to update in case it exists.
     */
    where: OfferProposalWhereUniqueInput
    /**
     * In case the OfferProposal found by the `where` argument doesn't exist, create a new OfferProposal with this data.
     */
    create: XOR<OfferProposalCreateInput, OfferProposalUncheckedCreateInput>
    /**
     * In case the OfferProposal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OfferProposalUpdateInput, OfferProposalUncheckedUpdateInput>
  }

  /**
   * OfferProposal delete
   */
  export type OfferProposalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferProposal
     */
    select?: OfferProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferProposal
     */
    omit?: OfferProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferProposalInclude<ExtArgs> | null
    /**
     * Filter which OfferProposal to delete.
     */
    where: OfferProposalWhereUniqueInput
  }

  /**
   * OfferProposal deleteMany
   */
  export type OfferProposalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OfferProposals to delete
     */
    where?: OfferProposalWhereInput
    /**
     * Limit how many OfferProposals to delete.
     */
    limit?: number
  }

  /**
   * OfferProposal.items
   */
  export type OfferProposal$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalItem
     */
    select?: ProposalItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProposalItem
     */
    omit?: ProposalItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalItemInclude<ExtArgs> | null
    where?: ProposalItemWhereInput
    orderBy?: ProposalItemOrderByWithRelationInput | ProposalItemOrderByWithRelationInput[]
    cursor?: ProposalItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProposalItemScalarFieldEnum | ProposalItemScalarFieldEnum[]
  }

  /**
   * OfferProposal without action
   */
  export type OfferProposalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferProposal
     */
    select?: OfferProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferProposal
     */
    omit?: OfferProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferProposalInclude<ExtArgs> | null
  }


  /**
   * Model ProposalItem
   */

  export type AggregateProposalItem = {
    _count: ProposalItemCountAggregateOutputType | null
    _min: ProposalItemMinAggregateOutputType | null
    _max: ProposalItemMaxAggregateOutputType | null
  }

  export type ProposalItemMinAggregateOutputType = {
    id: string | null
    offerProposalId: string | null
    itemId: string | null
  }

  export type ProposalItemMaxAggregateOutputType = {
    id: string | null
    offerProposalId: string | null
    itemId: string | null
  }

  export type ProposalItemCountAggregateOutputType = {
    id: number
    offerProposalId: number
    itemId: number
    _all: number
  }


  export type ProposalItemMinAggregateInputType = {
    id?: true
    offerProposalId?: true
    itemId?: true
  }

  export type ProposalItemMaxAggregateInputType = {
    id?: true
    offerProposalId?: true
    itemId?: true
  }

  export type ProposalItemCountAggregateInputType = {
    id?: true
    offerProposalId?: true
    itemId?: true
    _all?: true
  }

  export type ProposalItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProposalItem to aggregate.
     */
    where?: ProposalItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProposalItems to fetch.
     */
    orderBy?: ProposalItemOrderByWithRelationInput | ProposalItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProposalItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProposalItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProposalItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProposalItems
    **/
    _count?: true | ProposalItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProposalItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProposalItemMaxAggregateInputType
  }

  export type GetProposalItemAggregateType<T extends ProposalItemAggregateArgs> = {
        [P in keyof T & keyof AggregateProposalItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProposalItem[P]>
      : GetScalarType<T[P], AggregateProposalItem[P]>
  }




  export type ProposalItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProposalItemWhereInput
    orderBy?: ProposalItemOrderByWithAggregationInput | ProposalItemOrderByWithAggregationInput[]
    by: ProposalItemScalarFieldEnum[] | ProposalItemScalarFieldEnum
    having?: ProposalItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProposalItemCountAggregateInputType | true
    _min?: ProposalItemMinAggregateInputType
    _max?: ProposalItemMaxAggregateInputType
  }

  export type ProposalItemGroupByOutputType = {
    id: string
    offerProposalId: string
    itemId: string
    _count: ProposalItemCountAggregateOutputType | null
    _min: ProposalItemMinAggregateOutputType | null
    _max: ProposalItemMaxAggregateOutputType | null
  }

  type GetProposalItemGroupByPayload<T extends ProposalItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProposalItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProposalItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProposalItemGroupByOutputType[P]>
            : GetScalarType<T[P], ProposalItemGroupByOutputType[P]>
        }
      >
    >


  export type ProposalItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    offerProposalId?: boolean
    itemId?: boolean
    offerProposal?: boolean | OfferProposalDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proposalItem"]>

  export type ProposalItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    offerProposalId?: boolean
    itemId?: boolean
    offerProposal?: boolean | OfferProposalDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proposalItem"]>

  export type ProposalItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    offerProposalId?: boolean
    itemId?: boolean
    offerProposal?: boolean | OfferProposalDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proposalItem"]>

  export type ProposalItemSelectScalar = {
    id?: boolean
    offerProposalId?: boolean
    itemId?: boolean
  }

  export type ProposalItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "offerProposalId" | "itemId", ExtArgs["result"]["proposalItem"]>
  export type ProposalItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offerProposal?: boolean | OfferProposalDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }
  export type ProposalItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offerProposal?: boolean | OfferProposalDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }
  export type ProposalItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offerProposal?: boolean | OfferProposalDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }

  export type $ProposalItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProposalItem"
    objects: {
      offerProposal: Prisma.$OfferProposalPayload<ExtArgs>
      item: Prisma.$ItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      offerProposalId: string
      itemId: string
    }, ExtArgs["result"]["proposalItem"]>
    composites: {}
  }

  type ProposalItemGetPayload<S extends boolean | null | undefined | ProposalItemDefaultArgs> = $Result.GetResult<Prisma.$ProposalItemPayload, S>

  type ProposalItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProposalItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProposalItemCountAggregateInputType | true
    }

  export interface ProposalItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProposalItem'], meta: { name: 'ProposalItem' } }
    /**
     * Find zero or one ProposalItem that matches the filter.
     * @param {ProposalItemFindUniqueArgs} args - Arguments to find a ProposalItem
     * @example
     * // Get one ProposalItem
     * const proposalItem = await prisma.proposalItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProposalItemFindUniqueArgs>(args: SelectSubset<T, ProposalItemFindUniqueArgs<ExtArgs>>): Prisma__ProposalItemClient<$Result.GetResult<Prisma.$ProposalItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProposalItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProposalItemFindUniqueOrThrowArgs} args - Arguments to find a ProposalItem
     * @example
     * // Get one ProposalItem
     * const proposalItem = await prisma.proposalItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProposalItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ProposalItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProposalItemClient<$Result.GetResult<Prisma.$ProposalItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProposalItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalItemFindFirstArgs} args - Arguments to find a ProposalItem
     * @example
     * // Get one ProposalItem
     * const proposalItem = await prisma.proposalItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProposalItemFindFirstArgs>(args?: SelectSubset<T, ProposalItemFindFirstArgs<ExtArgs>>): Prisma__ProposalItemClient<$Result.GetResult<Prisma.$ProposalItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProposalItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalItemFindFirstOrThrowArgs} args - Arguments to find a ProposalItem
     * @example
     * // Get one ProposalItem
     * const proposalItem = await prisma.proposalItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProposalItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ProposalItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProposalItemClient<$Result.GetResult<Prisma.$ProposalItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProposalItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProposalItems
     * const proposalItems = await prisma.proposalItem.findMany()
     * 
     * // Get first 10 ProposalItems
     * const proposalItems = await prisma.proposalItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const proposalItemWithIdOnly = await prisma.proposalItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProposalItemFindManyArgs>(args?: SelectSubset<T, ProposalItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposalItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProposalItem.
     * @param {ProposalItemCreateArgs} args - Arguments to create a ProposalItem.
     * @example
     * // Create one ProposalItem
     * const ProposalItem = await prisma.proposalItem.create({
     *   data: {
     *     // ... data to create a ProposalItem
     *   }
     * })
     * 
     */
    create<T extends ProposalItemCreateArgs>(args: SelectSubset<T, ProposalItemCreateArgs<ExtArgs>>): Prisma__ProposalItemClient<$Result.GetResult<Prisma.$ProposalItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProposalItems.
     * @param {ProposalItemCreateManyArgs} args - Arguments to create many ProposalItems.
     * @example
     * // Create many ProposalItems
     * const proposalItem = await prisma.proposalItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProposalItemCreateManyArgs>(args?: SelectSubset<T, ProposalItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProposalItems and returns the data saved in the database.
     * @param {ProposalItemCreateManyAndReturnArgs} args - Arguments to create many ProposalItems.
     * @example
     * // Create many ProposalItems
     * const proposalItem = await prisma.proposalItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProposalItems and only return the `id`
     * const proposalItemWithIdOnly = await prisma.proposalItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProposalItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ProposalItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposalItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProposalItem.
     * @param {ProposalItemDeleteArgs} args - Arguments to delete one ProposalItem.
     * @example
     * // Delete one ProposalItem
     * const ProposalItem = await prisma.proposalItem.delete({
     *   where: {
     *     // ... filter to delete one ProposalItem
     *   }
     * })
     * 
     */
    delete<T extends ProposalItemDeleteArgs>(args: SelectSubset<T, ProposalItemDeleteArgs<ExtArgs>>): Prisma__ProposalItemClient<$Result.GetResult<Prisma.$ProposalItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProposalItem.
     * @param {ProposalItemUpdateArgs} args - Arguments to update one ProposalItem.
     * @example
     * // Update one ProposalItem
     * const proposalItem = await prisma.proposalItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProposalItemUpdateArgs>(args: SelectSubset<T, ProposalItemUpdateArgs<ExtArgs>>): Prisma__ProposalItemClient<$Result.GetResult<Prisma.$ProposalItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProposalItems.
     * @param {ProposalItemDeleteManyArgs} args - Arguments to filter ProposalItems to delete.
     * @example
     * // Delete a few ProposalItems
     * const { count } = await prisma.proposalItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProposalItemDeleteManyArgs>(args?: SelectSubset<T, ProposalItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProposalItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProposalItems
     * const proposalItem = await prisma.proposalItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProposalItemUpdateManyArgs>(args: SelectSubset<T, ProposalItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProposalItems and returns the data updated in the database.
     * @param {ProposalItemUpdateManyAndReturnArgs} args - Arguments to update many ProposalItems.
     * @example
     * // Update many ProposalItems
     * const proposalItem = await prisma.proposalItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProposalItems and only return the `id`
     * const proposalItemWithIdOnly = await prisma.proposalItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProposalItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ProposalItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposalItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProposalItem.
     * @param {ProposalItemUpsertArgs} args - Arguments to update or create a ProposalItem.
     * @example
     * // Update or create a ProposalItem
     * const proposalItem = await prisma.proposalItem.upsert({
     *   create: {
     *     // ... data to create a ProposalItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProposalItem we want to update
     *   }
     * })
     */
    upsert<T extends ProposalItemUpsertArgs>(args: SelectSubset<T, ProposalItemUpsertArgs<ExtArgs>>): Prisma__ProposalItemClient<$Result.GetResult<Prisma.$ProposalItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProposalItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalItemCountArgs} args - Arguments to filter ProposalItems to count.
     * @example
     * // Count the number of ProposalItems
     * const count = await prisma.proposalItem.count({
     *   where: {
     *     // ... the filter for the ProposalItems we want to count
     *   }
     * })
    **/
    count<T extends ProposalItemCountArgs>(
      args?: Subset<T, ProposalItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProposalItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProposalItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProposalItemAggregateArgs>(args: Subset<T, ProposalItemAggregateArgs>): Prisma.PrismaPromise<GetProposalItemAggregateType<T>>

    /**
     * Group by ProposalItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalItemGroupByArgs} args - Group by arguments.
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
      T extends ProposalItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProposalItemGroupByArgs['orderBy'] }
        : { orderBy?: ProposalItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProposalItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProposalItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProposalItem model
   */
  readonly fields: ProposalItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProposalItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProposalItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    offerProposal<T extends OfferProposalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OfferProposalDefaultArgs<ExtArgs>>): Prisma__OfferProposalClient<$Result.GetResult<Prisma.$OfferProposalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    item<T extends ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemDefaultArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProposalItem model
   */
  interface ProposalItemFieldRefs {
    readonly id: FieldRef<"ProposalItem", 'String'>
    readonly offerProposalId: FieldRef<"ProposalItem", 'String'>
    readonly itemId: FieldRef<"ProposalItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProposalItem findUnique
   */
  export type ProposalItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalItem
     */
    select?: ProposalItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProposalItem
     */
    omit?: ProposalItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalItemInclude<ExtArgs> | null
    /**
     * Filter, which ProposalItem to fetch.
     */
    where: ProposalItemWhereUniqueInput
  }

  /**
   * ProposalItem findUniqueOrThrow
   */
  export type ProposalItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalItem
     */
    select?: ProposalItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProposalItem
     */
    omit?: ProposalItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalItemInclude<ExtArgs> | null
    /**
     * Filter, which ProposalItem to fetch.
     */
    where: ProposalItemWhereUniqueInput
  }

  /**
   * ProposalItem findFirst
   */
  export type ProposalItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalItem
     */
    select?: ProposalItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProposalItem
     */
    omit?: ProposalItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalItemInclude<ExtArgs> | null
    /**
     * Filter, which ProposalItem to fetch.
     */
    where?: ProposalItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProposalItems to fetch.
     */
    orderBy?: ProposalItemOrderByWithRelationInput | ProposalItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProposalItems.
     */
    cursor?: ProposalItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProposalItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProposalItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProposalItems.
     */
    distinct?: ProposalItemScalarFieldEnum | ProposalItemScalarFieldEnum[]
  }

  /**
   * ProposalItem findFirstOrThrow
   */
  export type ProposalItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalItem
     */
    select?: ProposalItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProposalItem
     */
    omit?: ProposalItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalItemInclude<ExtArgs> | null
    /**
     * Filter, which ProposalItem to fetch.
     */
    where?: ProposalItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProposalItems to fetch.
     */
    orderBy?: ProposalItemOrderByWithRelationInput | ProposalItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProposalItems.
     */
    cursor?: ProposalItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProposalItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProposalItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProposalItems.
     */
    distinct?: ProposalItemScalarFieldEnum | ProposalItemScalarFieldEnum[]
  }

  /**
   * ProposalItem findMany
   */
  export type ProposalItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalItem
     */
    select?: ProposalItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProposalItem
     */
    omit?: ProposalItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalItemInclude<ExtArgs> | null
    /**
     * Filter, which ProposalItems to fetch.
     */
    where?: ProposalItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProposalItems to fetch.
     */
    orderBy?: ProposalItemOrderByWithRelationInput | ProposalItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProposalItems.
     */
    cursor?: ProposalItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProposalItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProposalItems.
     */
    skip?: number
    distinct?: ProposalItemScalarFieldEnum | ProposalItemScalarFieldEnum[]
  }

  /**
   * ProposalItem create
   */
  export type ProposalItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalItem
     */
    select?: ProposalItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProposalItem
     */
    omit?: ProposalItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalItemInclude<ExtArgs> | null
    /**
     * The data needed to create a ProposalItem.
     */
    data: XOR<ProposalItemCreateInput, ProposalItemUncheckedCreateInput>
  }

  /**
   * ProposalItem createMany
   */
  export type ProposalItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProposalItems.
     */
    data: ProposalItemCreateManyInput | ProposalItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProposalItem createManyAndReturn
   */
  export type ProposalItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalItem
     */
    select?: ProposalItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProposalItem
     */
    omit?: ProposalItemOmit<ExtArgs> | null
    /**
     * The data used to create many ProposalItems.
     */
    data: ProposalItemCreateManyInput | ProposalItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProposalItem update
   */
  export type ProposalItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalItem
     */
    select?: ProposalItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProposalItem
     */
    omit?: ProposalItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalItemInclude<ExtArgs> | null
    /**
     * The data needed to update a ProposalItem.
     */
    data: XOR<ProposalItemUpdateInput, ProposalItemUncheckedUpdateInput>
    /**
     * Choose, which ProposalItem to update.
     */
    where: ProposalItemWhereUniqueInput
  }

  /**
   * ProposalItem updateMany
   */
  export type ProposalItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProposalItems.
     */
    data: XOR<ProposalItemUpdateManyMutationInput, ProposalItemUncheckedUpdateManyInput>
    /**
     * Filter which ProposalItems to update
     */
    where?: ProposalItemWhereInput
    /**
     * Limit how many ProposalItems to update.
     */
    limit?: number
  }

  /**
   * ProposalItem updateManyAndReturn
   */
  export type ProposalItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalItem
     */
    select?: ProposalItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProposalItem
     */
    omit?: ProposalItemOmit<ExtArgs> | null
    /**
     * The data used to update ProposalItems.
     */
    data: XOR<ProposalItemUpdateManyMutationInput, ProposalItemUncheckedUpdateManyInput>
    /**
     * Filter which ProposalItems to update
     */
    where?: ProposalItemWhereInput
    /**
     * Limit how many ProposalItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProposalItem upsert
   */
  export type ProposalItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalItem
     */
    select?: ProposalItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProposalItem
     */
    omit?: ProposalItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalItemInclude<ExtArgs> | null
    /**
     * The filter to search for the ProposalItem to update in case it exists.
     */
    where: ProposalItemWhereUniqueInput
    /**
     * In case the ProposalItem found by the `where` argument doesn't exist, create a new ProposalItem with this data.
     */
    create: XOR<ProposalItemCreateInput, ProposalItemUncheckedCreateInput>
    /**
     * In case the ProposalItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProposalItemUpdateInput, ProposalItemUncheckedUpdateInput>
  }

  /**
   * ProposalItem delete
   */
  export type ProposalItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalItem
     */
    select?: ProposalItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProposalItem
     */
    omit?: ProposalItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalItemInclude<ExtArgs> | null
    /**
     * Filter which ProposalItem to delete.
     */
    where: ProposalItemWhereUniqueInput
  }

  /**
   * ProposalItem deleteMany
   */
  export type ProposalItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProposalItems to delete
     */
    where?: ProposalItemWhereInput
    /**
     * Limit how many ProposalItems to delete.
     */
    limit?: number
  }

  /**
   * ProposalItem without action
   */
  export type ProposalItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalItem
     */
    select?: ProposalItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProposalItem
     */
    omit?: ProposalItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalItemInclude<ExtArgs> | null
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
    email: 'email',
    passwordHash: 'passwordHash',
    name: 'name',
    image: 'image',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    imageUrl: 'imageUrl',
    ownerId: 'ownerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum]


  export const TradeOfferScalarFieldEnum: {
    id: 'id',
    ownerId: 'ownerId',
    createdAt: 'createdAt'
  };

  export type TradeOfferScalarFieldEnum = (typeof TradeOfferScalarFieldEnum)[keyof typeof TradeOfferScalarFieldEnum]


  export const TradeOfferItemScalarFieldEnum: {
    id: 'id',
    tradeOfferId: 'tradeOfferId',
    itemId: 'itemId'
  };

  export type TradeOfferItemScalarFieldEnum = (typeof TradeOfferItemScalarFieldEnum)[keyof typeof TradeOfferItemScalarFieldEnum]


  export const OfferProposalScalarFieldEnum: {
    id: 'id',
    tradeOfferId: 'tradeOfferId',
    proposerId: 'proposerId',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type OfferProposalScalarFieldEnum = (typeof OfferProposalScalarFieldEnum)[keyof typeof OfferProposalScalarFieldEnum]


  export const ProposalItemScalarFieldEnum: {
    id: 'id',
    offerProposalId: 'offerProposalId',
    itemId: 'itemId'
  };

  export type ProposalItemScalarFieldEnum = (typeof ProposalItemScalarFieldEnum)[keyof typeof ProposalItemScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    items?: ItemListRelationFilter
    tradeOffers?: TradeOfferListRelationFilter
    proposals?: OfferProposalListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    items?: ItemOrderByRelationAggregateInput
    tradeOffers?: TradeOfferOrderByRelationAggregateInput
    proposals?: OfferProposalOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    items?: ItemListRelationFilter
    tradeOffers?: TradeOfferListRelationFilter
    proposals?: OfferProposalListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ItemWhereInput = {
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    id?: StringFilter<"Item"> | string
    name?: StringFilter<"Item"> | string
    description?: StringNullableFilter<"Item"> | string | null
    imageUrl?: StringNullableFilter<"Item"> | string | null
    ownerId?: StringFilter<"Item"> | string
    createdAt?: DateTimeFilter<"Item"> | Date | string
    updatedAt?: DateTimeFilter<"Item"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    tradeOfferItem?: XOR<TradeOfferItemNullableScalarRelationFilter, TradeOfferItemWhereInput> | null
    proposalItem?: XOR<ProposalItemNullableScalarRelationFilter, ProposalItemWhereInput> | null
  }

  export type ItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    tradeOfferItem?: TradeOfferItemOrderByWithRelationInput
    proposalItem?: ProposalItemOrderByWithRelationInput
  }

  export type ItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    name?: StringFilter<"Item"> | string
    description?: StringNullableFilter<"Item"> | string | null
    imageUrl?: StringNullableFilter<"Item"> | string | null
    ownerId?: StringFilter<"Item"> | string
    createdAt?: DateTimeFilter<"Item"> | Date | string
    updatedAt?: DateTimeFilter<"Item"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    tradeOfferItem?: XOR<TradeOfferItemNullableScalarRelationFilter, TradeOfferItemWhereInput> | null
    proposalItem?: XOR<ProposalItemNullableScalarRelationFilter, ProposalItemWhereInput> | null
  }, "id">

  export type ItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ItemCountOrderByAggregateInput
    _max?: ItemMaxOrderByAggregateInput
    _min?: ItemMinOrderByAggregateInput
  }

  export type ItemScalarWhereWithAggregatesInput = {
    AND?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    OR?: ItemScalarWhereWithAggregatesInput[]
    NOT?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Item"> | string
    name?: StringWithAggregatesFilter<"Item"> | string
    description?: StringNullableWithAggregatesFilter<"Item"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Item"> | string | null
    ownerId?: StringWithAggregatesFilter<"Item"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Item"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Item"> | Date | string
  }

  export type TradeOfferWhereInput = {
    AND?: TradeOfferWhereInput | TradeOfferWhereInput[]
    OR?: TradeOfferWhereInput[]
    NOT?: TradeOfferWhereInput | TradeOfferWhereInput[]
    id?: StringFilter<"TradeOffer"> | string
    ownerId?: StringFilter<"TradeOffer"> | string
    createdAt?: DateTimeFilter<"TradeOffer"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: TradeOfferItemListRelationFilter
    proposals?: OfferProposalListRelationFilter
  }

  export type TradeOfferOrderByWithRelationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    items?: TradeOfferItemOrderByRelationAggregateInput
    proposals?: OfferProposalOrderByRelationAggregateInput
  }

  export type TradeOfferWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TradeOfferWhereInput | TradeOfferWhereInput[]
    OR?: TradeOfferWhereInput[]
    NOT?: TradeOfferWhereInput | TradeOfferWhereInput[]
    ownerId?: StringFilter<"TradeOffer"> | string
    createdAt?: DateTimeFilter<"TradeOffer"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: TradeOfferItemListRelationFilter
    proposals?: OfferProposalListRelationFilter
  }, "id">

  export type TradeOfferOrderByWithAggregationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    _count?: TradeOfferCountOrderByAggregateInput
    _max?: TradeOfferMaxOrderByAggregateInput
    _min?: TradeOfferMinOrderByAggregateInput
  }

  export type TradeOfferScalarWhereWithAggregatesInput = {
    AND?: TradeOfferScalarWhereWithAggregatesInput | TradeOfferScalarWhereWithAggregatesInput[]
    OR?: TradeOfferScalarWhereWithAggregatesInput[]
    NOT?: TradeOfferScalarWhereWithAggregatesInput | TradeOfferScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TradeOffer"> | string
    ownerId?: StringWithAggregatesFilter<"TradeOffer"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TradeOffer"> | Date | string
  }

  export type TradeOfferItemWhereInput = {
    AND?: TradeOfferItemWhereInput | TradeOfferItemWhereInput[]
    OR?: TradeOfferItemWhereInput[]
    NOT?: TradeOfferItemWhereInput | TradeOfferItemWhereInput[]
    id?: StringFilter<"TradeOfferItem"> | string
    tradeOfferId?: StringFilter<"TradeOfferItem"> | string
    itemId?: StringFilter<"TradeOfferItem"> | string
    tradeOffer?: XOR<TradeOfferScalarRelationFilter, TradeOfferWhereInput>
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }

  export type TradeOfferItemOrderByWithRelationInput = {
    id?: SortOrder
    tradeOfferId?: SortOrder
    itemId?: SortOrder
    tradeOffer?: TradeOfferOrderByWithRelationInput
    item?: ItemOrderByWithRelationInput
  }

  export type TradeOfferItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    itemId?: string
    AND?: TradeOfferItemWhereInput | TradeOfferItemWhereInput[]
    OR?: TradeOfferItemWhereInput[]
    NOT?: TradeOfferItemWhereInput | TradeOfferItemWhereInput[]
    tradeOfferId?: StringFilter<"TradeOfferItem"> | string
    tradeOffer?: XOR<TradeOfferScalarRelationFilter, TradeOfferWhereInput>
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }, "id" | "itemId">

  export type TradeOfferItemOrderByWithAggregationInput = {
    id?: SortOrder
    tradeOfferId?: SortOrder
    itemId?: SortOrder
    _count?: TradeOfferItemCountOrderByAggregateInput
    _max?: TradeOfferItemMaxOrderByAggregateInput
    _min?: TradeOfferItemMinOrderByAggregateInput
  }

  export type TradeOfferItemScalarWhereWithAggregatesInput = {
    AND?: TradeOfferItemScalarWhereWithAggregatesInput | TradeOfferItemScalarWhereWithAggregatesInput[]
    OR?: TradeOfferItemScalarWhereWithAggregatesInput[]
    NOT?: TradeOfferItemScalarWhereWithAggregatesInput | TradeOfferItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TradeOfferItem"> | string
    tradeOfferId?: StringWithAggregatesFilter<"TradeOfferItem"> | string
    itemId?: StringWithAggregatesFilter<"TradeOfferItem"> | string
  }

  export type OfferProposalWhereInput = {
    AND?: OfferProposalWhereInput | OfferProposalWhereInput[]
    OR?: OfferProposalWhereInput[]
    NOT?: OfferProposalWhereInput | OfferProposalWhereInput[]
    id?: StringFilter<"OfferProposal"> | string
    tradeOfferId?: StringFilter<"OfferProposal"> | string
    proposerId?: StringFilter<"OfferProposal"> | string
    status?: StringFilter<"OfferProposal"> | string
    createdAt?: DateTimeFilter<"OfferProposal"> | Date | string
    tradeOffer?: XOR<TradeOfferScalarRelationFilter, TradeOfferWhereInput>
    proposer?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: ProposalItemListRelationFilter
  }

  export type OfferProposalOrderByWithRelationInput = {
    id?: SortOrder
    tradeOfferId?: SortOrder
    proposerId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    tradeOffer?: TradeOfferOrderByWithRelationInput
    proposer?: UserOrderByWithRelationInput
    items?: ProposalItemOrderByRelationAggregateInput
  }

  export type OfferProposalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OfferProposalWhereInput | OfferProposalWhereInput[]
    OR?: OfferProposalWhereInput[]
    NOT?: OfferProposalWhereInput | OfferProposalWhereInput[]
    tradeOfferId?: StringFilter<"OfferProposal"> | string
    proposerId?: StringFilter<"OfferProposal"> | string
    status?: StringFilter<"OfferProposal"> | string
    createdAt?: DateTimeFilter<"OfferProposal"> | Date | string
    tradeOffer?: XOR<TradeOfferScalarRelationFilter, TradeOfferWhereInput>
    proposer?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: ProposalItemListRelationFilter
  }, "id">

  export type OfferProposalOrderByWithAggregationInput = {
    id?: SortOrder
    tradeOfferId?: SortOrder
    proposerId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: OfferProposalCountOrderByAggregateInput
    _max?: OfferProposalMaxOrderByAggregateInput
    _min?: OfferProposalMinOrderByAggregateInput
  }

  export type OfferProposalScalarWhereWithAggregatesInput = {
    AND?: OfferProposalScalarWhereWithAggregatesInput | OfferProposalScalarWhereWithAggregatesInput[]
    OR?: OfferProposalScalarWhereWithAggregatesInput[]
    NOT?: OfferProposalScalarWhereWithAggregatesInput | OfferProposalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OfferProposal"> | string
    tradeOfferId?: StringWithAggregatesFilter<"OfferProposal"> | string
    proposerId?: StringWithAggregatesFilter<"OfferProposal"> | string
    status?: StringWithAggregatesFilter<"OfferProposal"> | string
    createdAt?: DateTimeWithAggregatesFilter<"OfferProposal"> | Date | string
  }

  export type ProposalItemWhereInput = {
    AND?: ProposalItemWhereInput | ProposalItemWhereInput[]
    OR?: ProposalItemWhereInput[]
    NOT?: ProposalItemWhereInput | ProposalItemWhereInput[]
    id?: StringFilter<"ProposalItem"> | string
    offerProposalId?: StringFilter<"ProposalItem"> | string
    itemId?: StringFilter<"ProposalItem"> | string
    offerProposal?: XOR<OfferProposalScalarRelationFilter, OfferProposalWhereInput>
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }

  export type ProposalItemOrderByWithRelationInput = {
    id?: SortOrder
    offerProposalId?: SortOrder
    itemId?: SortOrder
    offerProposal?: OfferProposalOrderByWithRelationInput
    item?: ItemOrderByWithRelationInput
  }

  export type ProposalItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    itemId?: string
    AND?: ProposalItemWhereInput | ProposalItemWhereInput[]
    OR?: ProposalItemWhereInput[]
    NOT?: ProposalItemWhereInput | ProposalItemWhereInput[]
    offerProposalId?: StringFilter<"ProposalItem"> | string
    offerProposal?: XOR<OfferProposalScalarRelationFilter, OfferProposalWhereInput>
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }, "id" | "itemId">

  export type ProposalItemOrderByWithAggregationInput = {
    id?: SortOrder
    offerProposalId?: SortOrder
    itemId?: SortOrder
    _count?: ProposalItemCountOrderByAggregateInput
    _max?: ProposalItemMaxOrderByAggregateInput
    _min?: ProposalItemMinOrderByAggregateInput
  }

  export type ProposalItemScalarWhereWithAggregatesInput = {
    AND?: ProposalItemScalarWhereWithAggregatesInput | ProposalItemScalarWhereWithAggregatesInput[]
    OR?: ProposalItemScalarWhereWithAggregatesInput[]
    NOT?: ProposalItemScalarWhereWithAggregatesInput | ProposalItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProposalItem"> | string
    offerProposalId?: StringWithAggregatesFilter<"ProposalItem"> | string
    itemId?: StringWithAggregatesFilter<"ProposalItem"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    items?: ItemCreateNestedManyWithoutOwnerInput
    tradeOffers?: TradeOfferCreateNestedManyWithoutOwnerInput
    proposals?: OfferProposalCreateNestedManyWithoutProposerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    items?: ItemUncheckedCreateNestedManyWithoutOwnerInput
    tradeOffers?: TradeOfferUncheckedCreateNestedManyWithoutOwnerInput
    proposals?: OfferProposalUncheckedCreateNestedManyWithoutProposerInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ItemUpdateManyWithoutOwnerNestedInput
    tradeOffers?: TradeOfferUpdateManyWithoutOwnerNestedInput
    proposals?: OfferProposalUpdateManyWithoutProposerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ItemUncheckedUpdateManyWithoutOwnerNestedInput
    tradeOffers?: TradeOfferUncheckedUpdateManyWithoutOwnerNestedInput
    proposals?: OfferProposalUncheckedUpdateManyWithoutProposerNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    image?: string | null
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemCreateInput = {
    id?: string
    name: string
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutItemsInput
    tradeOfferItem?: TradeOfferItemCreateNestedOneWithoutItemInput
    proposalItem?: ProposalItemCreateNestedOneWithoutItemInput
  }

  export type ItemUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    imageUrl?: string | null
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tradeOfferItem?: TradeOfferItemUncheckedCreateNestedOneWithoutItemInput
    proposalItem?: ProposalItemUncheckedCreateNestedOneWithoutItemInput
  }

  export type ItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutItemsNestedInput
    tradeOfferItem?: TradeOfferItemUpdateOneWithoutItemNestedInput
    proposalItem?: ProposalItemUpdateOneWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tradeOfferItem?: TradeOfferItemUncheckedUpdateOneWithoutItemNestedInput
    proposalItem?: ProposalItemUncheckedUpdateOneWithoutItemNestedInput
  }

  export type ItemCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    imageUrl?: string | null
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradeOfferCreateInput = {
    id?: string
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutTradeOffersInput
    items?: TradeOfferItemCreateNestedManyWithoutTradeOfferInput
    proposals?: OfferProposalCreateNestedManyWithoutTradeOfferInput
  }

  export type TradeOfferUncheckedCreateInput = {
    id?: string
    ownerId: string
    createdAt?: Date | string
    items?: TradeOfferItemUncheckedCreateNestedManyWithoutTradeOfferInput
    proposals?: OfferProposalUncheckedCreateNestedManyWithoutTradeOfferInput
  }

  export type TradeOfferUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutTradeOffersNestedInput
    items?: TradeOfferItemUpdateManyWithoutTradeOfferNestedInput
    proposals?: OfferProposalUpdateManyWithoutTradeOfferNestedInput
  }

  export type TradeOfferUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: TradeOfferItemUncheckedUpdateManyWithoutTradeOfferNestedInput
    proposals?: OfferProposalUncheckedUpdateManyWithoutTradeOfferNestedInput
  }

  export type TradeOfferCreateManyInput = {
    id?: string
    ownerId: string
    createdAt?: Date | string
  }

  export type TradeOfferUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradeOfferUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradeOfferItemCreateInput = {
    id?: string
    tradeOffer: TradeOfferCreateNestedOneWithoutItemsInput
    item: ItemCreateNestedOneWithoutTradeOfferItemInput
  }

  export type TradeOfferItemUncheckedCreateInput = {
    id?: string
    tradeOfferId: string
    itemId: string
  }

  export type TradeOfferItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tradeOffer?: TradeOfferUpdateOneRequiredWithoutItemsNestedInput
    item?: ItemUpdateOneRequiredWithoutTradeOfferItemNestedInput
  }

  export type TradeOfferItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tradeOfferId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
  }

  export type TradeOfferItemCreateManyInput = {
    id?: string
    tradeOfferId: string
    itemId: string
  }

  export type TradeOfferItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type TradeOfferItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tradeOfferId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
  }

  export type OfferProposalCreateInput = {
    id?: string
    status?: string
    createdAt?: Date | string
    tradeOffer: TradeOfferCreateNestedOneWithoutProposalsInput
    proposer: UserCreateNestedOneWithoutProposalsInput
    items?: ProposalItemCreateNestedManyWithoutOfferProposalInput
  }

  export type OfferProposalUncheckedCreateInput = {
    id?: string
    tradeOfferId: string
    proposerId: string
    status?: string
    createdAt?: Date | string
    items?: ProposalItemUncheckedCreateNestedManyWithoutOfferProposalInput
  }

  export type OfferProposalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tradeOffer?: TradeOfferUpdateOneRequiredWithoutProposalsNestedInput
    proposer?: UserUpdateOneRequiredWithoutProposalsNestedInput
    items?: ProposalItemUpdateManyWithoutOfferProposalNestedInput
  }

  export type OfferProposalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tradeOfferId?: StringFieldUpdateOperationsInput | string
    proposerId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ProposalItemUncheckedUpdateManyWithoutOfferProposalNestedInput
  }

  export type OfferProposalCreateManyInput = {
    id?: string
    tradeOfferId: string
    proposerId: string
    status?: string
    createdAt?: Date | string
  }

  export type OfferProposalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfferProposalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tradeOfferId?: StringFieldUpdateOperationsInput | string
    proposerId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProposalItemCreateInput = {
    id?: string
    offerProposal: OfferProposalCreateNestedOneWithoutItemsInput
    item: ItemCreateNestedOneWithoutProposalItemInput
  }

  export type ProposalItemUncheckedCreateInput = {
    id?: string
    offerProposalId: string
    itemId: string
  }

  export type ProposalItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    offerProposal?: OfferProposalUpdateOneRequiredWithoutItemsNestedInput
    item?: ItemUpdateOneRequiredWithoutProposalItemNestedInput
  }

  export type ProposalItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    offerProposalId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
  }

  export type ProposalItemCreateManyInput = {
    id?: string
    offerProposalId: string
    itemId: string
  }

  export type ProposalItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ProposalItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    offerProposalId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
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

  export type ItemListRelationFilter = {
    every?: ItemWhereInput
    some?: ItemWhereInput
    none?: ItemWhereInput
  }

  export type TradeOfferListRelationFilter = {
    every?: TradeOfferWhereInput
    some?: TradeOfferWhereInput
    none?: TradeOfferWhereInput
  }

  export type OfferProposalListRelationFilter = {
    every?: OfferProposalWhereInput
    some?: OfferProposalWhereInput
    none?: OfferProposalWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TradeOfferOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OfferProposalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TradeOfferItemNullableScalarRelationFilter = {
    is?: TradeOfferItemWhereInput | null
    isNot?: TradeOfferItemWhereInput | null
  }

  export type ProposalItemNullableScalarRelationFilter = {
    is?: ProposalItemWhereInput | null
    isNot?: ProposalItemWhereInput | null
  }

  export type ItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TradeOfferItemListRelationFilter = {
    every?: TradeOfferItemWhereInput
    some?: TradeOfferItemWhereInput
    none?: TradeOfferItemWhereInput
  }

  export type TradeOfferItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TradeOfferCountOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
  }

  export type TradeOfferMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
  }

  export type TradeOfferMinOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
  }

  export type TradeOfferScalarRelationFilter = {
    is?: TradeOfferWhereInput
    isNot?: TradeOfferWhereInput
  }

  export type ItemScalarRelationFilter = {
    is?: ItemWhereInput
    isNot?: ItemWhereInput
  }

  export type TradeOfferItemCountOrderByAggregateInput = {
    id?: SortOrder
    tradeOfferId?: SortOrder
    itemId?: SortOrder
  }

  export type TradeOfferItemMaxOrderByAggregateInput = {
    id?: SortOrder
    tradeOfferId?: SortOrder
    itemId?: SortOrder
  }

  export type TradeOfferItemMinOrderByAggregateInput = {
    id?: SortOrder
    tradeOfferId?: SortOrder
    itemId?: SortOrder
  }

  export type ProposalItemListRelationFilter = {
    every?: ProposalItemWhereInput
    some?: ProposalItemWhereInput
    none?: ProposalItemWhereInput
  }

  export type ProposalItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OfferProposalCountOrderByAggregateInput = {
    id?: SortOrder
    tradeOfferId?: SortOrder
    proposerId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type OfferProposalMaxOrderByAggregateInput = {
    id?: SortOrder
    tradeOfferId?: SortOrder
    proposerId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type OfferProposalMinOrderByAggregateInput = {
    id?: SortOrder
    tradeOfferId?: SortOrder
    proposerId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type OfferProposalScalarRelationFilter = {
    is?: OfferProposalWhereInput
    isNot?: OfferProposalWhereInput
  }

  export type ProposalItemCountOrderByAggregateInput = {
    id?: SortOrder
    offerProposalId?: SortOrder
    itemId?: SortOrder
  }

  export type ProposalItemMaxOrderByAggregateInput = {
    id?: SortOrder
    offerProposalId?: SortOrder
    itemId?: SortOrder
  }

  export type ProposalItemMinOrderByAggregateInput = {
    id?: SortOrder
    offerProposalId?: SortOrder
    itemId?: SortOrder
  }

  export type ItemCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ItemCreateWithoutOwnerInput, ItemUncheckedCreateWithoutOwnerInput> | ItemCreateWithoutOwnerInput[] | ItemUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutOwnerInput | ItemCreateOrConnectWithoutOwnerInput[]
    createMany?: ItemCreateManyOwnerInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type TradeOfferCreateNestedManyWithoutOwnerInput = {
    create?: XOR<TradeOfferCreateWithoutOwnerInput, TradeOfferUncheckedCreateWithoutOwnerInput> | TradeOfferCreateWithoutOwnerInput[] | TradeOfferUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: TradeOfferCreateOrConnectWithoutOwnerInput | TradeOfferCreateOrConnectWithoutOwnerInput[]
    createMany?: TradeOfferCreateManyOwnerInputEnvelope
    connect?: TradeOfferWhereUniqueInput | TradeOfferWhereUniqueInput[]
  }

  export type OfferProposalCreateNestedManyWithoutProposerInput = {
    create?: XOR<OfferProposalCreateWithoutProposerInput, OfferProposalUncheckedCreateWithoutProposerInput> | OfferProposalCreateWithoutProposerInput[] | OfferProposalUncheckedCreateWithoutProposerInput[]
    connectOrCreate?: OfferProposalCreateOrConnectWithoutProposerInput | OfferProposalCreateOrConnectWithoutProposerInput[]
    createMany?: OfferProposalCreateManyProposerInputEnvelope
    connect?: OfferProposalWhereUniqueInput | OfferProposalWhereUniqueInput[]
  }

  export type ItemUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ItemCreateWithoutOwnerInput, ItemUncheckedCreateWithoutOwnerInput> | ItemCreateWithoutOwnerInput[] | ItemUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutOwnerInput | ItemCreateOrConnectWithoutOwnerInput[]
    createMany?: ItemCreateManyOwnerInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type TradeOfferUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<TradeOfferCreateWithoutOwnerInput, TradeOfferUncheckedCreateWithoutOwnerInput> | TradeOfferCreateWithoutOwnerInput[] | TradeOfferUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: TradeOfferCreateOrConnectWithoutOwnerInput | TradeOfferCreateOrConnectWithoutOwnerInput[]
    createMany?: TradeOfferCreateManyOwnerInputEnvelope
    connect?: TradeOfferWhereUniqueInput | TradeOfferWhereUniqueInput[]
  }

  export type OfferProposalUncheckedCreateNestedManyWithoutProposerInput = {
    create?: XOR<OfferProposalCreateWithoutProposerInput, OfferProposalUncheckedCreateWithoutProposerInput> | OfferProposalCreateWithoutProposerInput[] | OfferProposalUncheckedCreateWithoutProposerInput[]
    connectOrCreate?: OfferProposalCreateOrConnectWithoutProposerInput | OfferProposalCreateOrConnectWithoutProposerInput[]
    createMany?: OfferProposalCreateManyProposerInputEnvelope
    connect?: OfferProposalWhereUniqueInput | OfferProposalWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ItemUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ItemCreateWithoutOwnerInput, ItemUncheckedCreateWithoutOwnerInput> | ItemCreateWithoutOwnerInput[] | ItemUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutOwnerInput | ItemCreateOrConnectWithoutOwnerInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutOwnerInput | ItemUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ItemCreateManyOwnerInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutOwnerInput | ItemUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutOwnerInput | ItemUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type TradeOfferUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<TradeOfferCreateWithoutOwnerInput, TradeOfferUncheckedCreateWithoutOwnerInput> | TradeOfferCreateWithoutOwnerInput[] | TradeOfferUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: TradeOfferCreateOrConnectWithoutOwnerInput | TradeOfferCreateOrConnectWithoutOwnerInput[]
    upsert?: TradeOfferUpsertWithWhereUniqueWithoutOwnerInput | TradeOfferUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: TradeOfferCreateManyOwnerInputEnvelope
    set?: TradeOfferWhereUniqueInput | TradeOfferWhereUniqueInput[]
    disconnect?: TradeOfferWhereUniqueInput | TradeOfferWhereUniqueInput[]
    delete?: TradeOfferWhereUniqueInput | TradeOfferWhereUniqueInput[]
    connect?: TradeOfferWhereUniqueInput | TradeOfferWhereUniqueInput[]
    update?: TradeOfferUpdateWithWhereUniqueWithoutOwnerInput | TradeOfferUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: TradeOfferUpdateManyWithWhereWithoutOwnerInput | TradeOfferUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: TradeOfferScalarWhereInput | TradeOfferScalarWhereInput[]
  }

  export type OfferProposalUpdateManyWithoutProposerNestedInput = {
    create?: XOR<OfferProposalCreateWithoutProposerInput, OfferProposalUncheckedCreateWithoutProposerInput> | OfferProposalCreateWithoutProposerInput[] | OfferProposalUncheckedCreateWithoutProposerInput[]
    connectOrCreate?: OfferProposalCreateOrConnectWithoutProposerInput | OfferProposalCreateOrConnectWithoutProposerInput[]
    upsert?: OfferProposalUpsertWithWhereUniqueWithoutProposerInput | OfferProposalUpsertWithWhereUniqueWithoutProposerInput[]
    createMany?: OfferProposalCreateManyProposerInputEnvelope
    set?: OfferProposalWhereUniqueInput | OfferProposalWhereUniqueInput[]
    disconnect?: OfferProposalWhereUniqueInput | OfferProposalWhereUniqueInput[]
    delete?: OfferProposalWhereUniqueInput | OfferProposalWhereUniqueInput[]
    connect?: OfferProposalWhereUniqueInput | OfferProposalWhereUniqueInput[]
    update?: OfferProposalUpdateWithWhereUniqueWithoutProposerInput | OfferProposalUpdateWithWhereUniqueWithoutProposerInput[]
    updateMany?: OfferProposalUpdateManyWithWhereWithoutProposerInput | OfferProposalUpdateManyWithWhereWithoutProposerInput[]
    deleteMany?: OfferProposalScalarWhereInput | OfferProposalScalarWhereInput[]
  }

  export type ItemUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ItemCreateWithoutOwnerInput, ItemUncheckedCreateWithoutOwnerInput> | ItemCreateWithoutOwnerInput[] | ItemUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutOwnerInput | ItemCreateOrConnectWithoutOwnerInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutOwnerInput | ItemUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ItemCreateManyOwnerInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutOwnerInput | ItemUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutOwnerInput | ItemUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type TradeOfferUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<TradeOfferCreateWithoutOwnerInput, TradeOfferUncheckedCreateWithoutOwnerInput> | TradeOfferCreateWithoutOwnerInput[] | TradeOfferUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: TradeOfferCreateOrConnectWithoutOwnerInput | TradeOfferCreateOrConnectWithoutOwnerInput[]
    upsert?: TradeOfferUpsertWithWhereUniqueWithoutOwnerInput | TradeOfferUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: TradeOfferCreateManyOwnerInputEnvelope
    set?: TradeOfferWhereUniqueInput | TradeOfferWhereUniqueInput[]
    disconnect?: TradeOfferWhereUniqueInput | TradeOfferWhereUniqueInput[]
    delete?: TradeOfferWhereUniqueInput | TradeOfferWhereUniqueInput[]
    connect?: TradeOfferWhereUniqueInput | TradeOfferWhereUniqueInput[]
    update?: TradeOfferUpdateWithWhereUniqueWithoutOwnerInput | TradeOfferUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: TradeOfferUpdateManyWithWhereWithoutOwnerInput | TradeOfferUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: TradeOfferScalarWhereInput | TradeOfferScalarWhereInput[]
  }

  export type OfferProposalUncheckedUpdateManyWithoutProposerNestedInput = {
    create?: XOR<OfferProposalCreateWithoutProposerInput, OfferProposalUncheckedCreateWithoutProposerInput> | OfferProposalCreateWithoutProposerInput[] | OfferProposalUncheckedCreateWithoutProposerInput[]
    connectOrCreate?: OfferProposalCreateOrConnectWithoutProposerInput | OfferProposalCreateOrConnectWithoutProposerInput[]
    upsert?: OfferProposalUpsertWithWhereUniqueWithoutProposerInput | OfferProposalUpsertWithWhereUniqueWithoutProposerInput[]
    createMany?: OfferProposalCreateManyProposerInputEnvelope
    set?: OfferProposalWhereUniqueInput | OfferProposalWhereUniqueInput[]
    disconnect?: OfferProposalWhereUniqueInput | OfferProposalWhereUniqueInput[]
    delete?: OfferProposalWhereUniqueInput | OfferProposalWhereUniqueInput[]
    connect?: OfferProposalWhereUniqueInput | OfferProposalWhereUniqueInput[]
    update?: OfferProposalUpdateWithWhereUniqueWithoutProposerInput | OfferProposalUpdateWithWhereUniqueWithoutProposerInput[]
    updateMany?: OfferProposalUpdateManyWithWhereWithoutProposerInput | OfferProposalUpdateManyWithWhereWithoutProposerInput[]
    deleteMany?: OfferProposalScalarWhereInput | OfferProposalScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutItemsInput = {
    create?: XOR<UserCreateWithoutItemsInput, UserUncheckedCreateWithoutItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutItemsInput
    connect?: UserWhereUniqueInput
  }

  export type TradeOfferItemCreateNestedOneWithoutItemInput = {
    create?: XOR<TradeOfferItemCreateWithoutItemInput, TradeOfferItemUncheckedCreateWithoutItemInput>
    connectOrCreate?: TradeOfferItemCreateOrConnectWithoutItemInput
    connect?: TradeOfferItemWhereUniqueInput
  }

  export type ProposalItemCreateNestedOneWithoutItemInput = {
    create?: XOR<ProposalItemCreateWithoutItemInput, ProposalItemUncheckedCreateWithoutItemInput>
    connectOrCreate?: ProposalItemCreateOrConnectWithoutItemInput
    connect?: ProposalItemWhereUniqueInput
  }

  export type TradeOfferItemUncheckedCreateNestedOneWithoutItemInput = {
    create?: XOR<TradeOfferItemCreateWithoutItemInput, TradeOfferItemUncheckedCreateWithoutItemInput>
    connectOrCreate?: TradeOfferItemCreateOrConnectWithoutItemInput
    connect?: TradeOfferItemWhereUniqueInput
  }

  export type ProposalItemUncheckedCreateNestedOneWithoutItemInput = {
    create?: XOR<ProposalItemCreateWithoutItemInput, ProposalItemUncheckedCreateWithoutItemInput>
    connectOrCreate?: ProposalItemCreateOrConnectWithoutItemInput
    connect?: ProposalItemWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<UserCreateWithoutItemsInput, UserUncheckedCreateWithoutItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutItemsInput
    upsert?: UserUpsertWithoutItemsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutItemsInput, UserUpdateWithoutItemsInput>, UserUncheckedUpdateWithoutItemsInput>
  }

  export type TradeOfferItemUpdateOneWithoutItemNestedInput = {
    create?: XOR<TradeOfferItemCreateWithoutItemInput, TradeOfferItemUncheckedCreateWithoutItemInput>
    connectOrCreate?: TradeOfferItemCreateOrConnectWithoutItemInput
    upsert?: TradeOfferItemUpsertWithoutItemInput
    disconnect?: TradeOfferItemWhereInput | boolean
    delete?: TradeOfferItemWhereInput | boolean
    connect?: TradeOfferItemWhereUniqueInput
    update?: XOR<XOR<TradeOfferItemUpdateToOneWithWhereWithoutItemInput, TradeOfferItemUpdateWithoutItemInput>, TradeOfferItemUncheckedUpdateWithoutItemInput>
  }

  export type ProposalItemUpdateOneWithoutItemNestedInput = {
    create?: XOR<ProposalItemCreateWithoutItemInput, ProposalItemUncheckedCreateWithoutItemInput>
    connectOrCreate?: ProposalItemCreateOrConnectWithoutItemInput
    upsert?: ProposalItemUpsertWithoutItemInput
    disconnect?: ProposalItemWhereInput | boolean
    delete?: ProposalItemWhereInput | boolean
    connect?: ProposalItemWhereUniqueInput
    update?: XOR<XOR<ProposalItemUpdateToOneWithWhereWithoutItemInput, ProposalItemUpdateWithoutItemInput>, ProposalItemUncheckedUpdateWithoutItemInput>
  }

  export type TradeOfferItemUncheckedUpdateOneWithoutItemNestedInput = {
    create?: XOR<TradeOfferItemCreateWithoutItemInput, TradeOfferItemUncheckedCreateWithoutItemInput>
    connectOrCreate?: TradeOfferItemCreateOrConnectWithoutItemInput
    upsert?: TradeOfferItemUpsertWithoutItemInput
    disconnect?: TradeOfferItemWhereInput | boolean
    delete?: TradeOfferItemWhereInput | boolean
    connect?: TradeOfferItemWhereUniqueInput
    update?: XOR<XOR<TradeOfferItemUpdateToOneWithWhereWithoutItemInput, TradeOfferItemUpdateWithoutItemInput>, TradeOfferItemUncheckedUpdateWithoutItemInput>
  }

  export type ProposalItemUncheckedUpdateOneWithoutItemNestedInput = {
    create?: XOR<ProposalItemCreateWithoutItemInput, ProposalItemUncheckedCreateWithoutItemInput>
    connectOrCreate?: ProposalItemCreateOrConnectWithoutItemInput
    upsert?: ProposalItemUpsertWithoutItemInput
    disconnect?: ProposalItemWhereInput | boolean
    delete?: ProposalItemWhereInput | boolean
    connect?: ProposalItemWhereUniqueInput
    update?: XOR<XOR<ProposalItemUpdateToOneWithWhereWithoutItemInput, ProposalItemUpdateWithoutItemInput>, ProposalItemUncheckedUpdateWithoutItemInput>
  }

  export type UserCreateNestedOneWithoutTradeOffersInput = {
    create?: XOR<UserCreateWithoutTradeOffersInput, UserUncheckedCreateWithoutTradeOffersInput>
    connectOrCreate?: UserCreateOrConnectWithoutTradeOffersInput
    connect?: UserWhereUniqueInput
  }

  export type TradeOfferItemCreateNestedManyWithoutTradeOfferInput = {
    create?: XOR<TradeOfferItemCreateWithoutTradeOfferInput, TradeOfferItemUncheckedCreateWithoutTradeOfferInput> | TradeOfferItemCreateWithoutTradeOfferInput[] | TradeOfferItemUncheckedCreateWithoutTradeOfferInput[]
    connectOrCreate?: TradeOfferItemCreateOrConnectWithoutTradeOfferInput | TradeOfferItemCreateOrConnectWithoutTradeOfferInput[]
    createMany?: TradeOfferItemCreateManyTradeOfferInputEnvelope
    connect?: TradeOfferItemWhereUniqueInput | TradeOfferItemWhereUniqueInput[]
  }

  export type OfferProposalCreateNestedManyWithoutTradeOfferInput = {
    create?: XOR<OfferProposalCreateWithoutTradeOfferInput, OfferProposalUncheckedCreateWithoutTradeOfferInput> | OfferProposalCreateWithoutTradeOfferInput[] | OfferProposalUncheckedCreateWithoutTradeOfferInput[]
    connectOrCreate?: OfferProposalCreateOrConnectWithoutTradeOfferInput | OfferProposalCreateOrConnectWithoutTradeOfferInput[]
    createMany?: OfferProposalCreateManyTradeOfferInputEnvelope
    connect?: OfferProposalWhereUniqueInput | OfferProposalWhereUniqueInput[]
  }

  export type TradeOfferItemUncheckedCreateNestedManyWithoutTradeOfferInput = {
    create?: XOR<TradeOfferItemCreateWithoutTradeOfferInput, TradeOfferItemUncheckedCreateWithoutTradeOfferInput> | TradeOfferItemCreateWithoutTradeOfferInput[] | TradeOfferItemUncheckedCreateWithoutTradeOfferInput[]
    connectOrCreate?: TradeOfferItemCreateOrConnectWithoutTradeOfferInput | TradeOfferItemCreateOrConnectWithoutTradeOfferInput[]
    createMany?: TradeOfferItemCreateManyTradeOfferInputEnvelope
    connect?: TradeOfferItemWhereUniqueInput | TradeOfferItemWhereUniqueInput[]
  }

  export type OfferProposalUncheckedCreateNestedManyWithoutTradeOfferInput = {
    create?: XOR<OfferProposalCreateWithoutTradeOfferInput, OfferProposalUncheckedCreateWithoutTradeOfferInput> | OfferProposalCreateWithoutTradeOfferInput[] | OfferProposalUncheckedCreateWithoutTradeOfferInput[]
    connectOrCreate?: OfferProposalCreateOrConnectWithoutTradeOfferInput | OfferProposalCreateOrConnectWithoutTradeOfferInput[]
    createMany?: OfferProposalCreateManyTradeOfferInputEnvelope
    connect?: OfferProposalWhereUniqueInput | OfferProposalWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutTradeOffersNestedInput = {
    create?: XOR<UserCreateWithoutTradeOffersInput, UserUncheckedCreateWithoutTradeOffersInput>
    connectOrCreate?: UserCreateOrConnectWithoutTradeOffersInput
    upsert?: UserUpsertWithoutTradeOffersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTradeOffersInput, UserUpdateWithoutTradeOffersInput>, UserUncheckedUpdateWithoutTradeOffersInput>
  }

  export type TradeOfferItemUpdateManyWithoutTradeOfferNestedInput = {
    create?: XOR<TradeOfferItemCreateWithoutTradeOfferInput, TradeOfferItemUncheckedCreateWithoutTradeOfferInput> | TradeOfferItemCreateWithoutTradeOfferInput[] | TradeOfferItemUncheckedCreateWithoutTradeOfferInput[]
    connectOrCreate?: TradeOfferItemCreateOrConnectWithoutTradeOfferInput | TradeOfferItemCreateOrConnectWithoutTradeOfferInput[]
    upsert?: TradeOfferItemUpsertWithWhereUniqueWithoutTradeOfferInput | TradeOfferItemUpsertWithWhereUniqueWithoutTradeOfferInput[]
    createMany?: TradeOfferItemCreateManyTradeOfferInputEnvelope
    set?: TradeOfferItemWhereUniqueInput | TradeOfferItemWhereUniqueInput[]
    disconnect?: TradeOfferItemWhereUniqueInput | TradeOfferItemWhereUniqueInput[]
    delete?: TradeOfferItemWhereUniqueInput | TradeOfferItemWhereUniqueInput[]
    connect?: TradeOfferItemWhereUniqueInput | TradeOfferItemWhereUniqueInput[]
    update?: TradeOfferItemUpdateWithWhereUniqueWithoutTradeOfferInput | TradeOfferItemUpdateWithWhereUniqueWithoutTradeOfferInput[]
    updateMany?: TradeOfferItemUpdateManyWithWhereWithoutTradeOfferInput | TradeOfferItemUpdateManyWithWhereWithoutTradeOfferInput[]
    deleteMany?: TradeOfferItemScalarWhereInput | TradeOfferItemScalarWhereInput[]
  }

  export type OfferProposalUpdateManyWithoutTradeOfferNestedInput = {
    create?: XOR<OfferProposalCreateWithoutTradeOfferInput, OfferProposalUncheckedCreateWithoutTradeOfferInput> | OfferProposalCreateWithoutTradeOfferInput[] | OfferProposalUncheckedCreateWithoutTradeOfferInput[]
    connectOrCreate?: OfferProposalCreateOrConnectWithoutTradeOfferInput | OfferProposalCreateOrConnectWithoutTradeOfferInput[]
    upsert?: OfferProposalUpsertWithWhereUniqueWithoutTradeOfferInput | OfferProposalUpsertWithWhereUniqueWithoutTradeOfferInput[]
    createMany?: OfferProposalCreateManyTradeOfferInputEnvelope
    set?: OfferProposalWhereUniqueInput | OfferProposalWhereUniqueInput[]
    disconnect?: OfferProposalWhereUniqueInput | OfferProposalWhereUniqueInput[]
    delete?: OfferProposalWhereUniqueInput | OfferProposalWhereUniqueInput[]
    connect?: OfferProposalWhereUniqueInput | OfferProposalWhereUniqueInput[]
    update?: OfferProposalUpdateWithWhereUniqueWithoutTradeOfferInput | OfferProposalUpdateWithWhereUniqueWithoutTradeOfferInput[]
    updateMany?: OfferProposalUpdateManyWithWhereWithoutTradeOfferInput | OfferProposalUpdateManyWithWhereWithoutTradeOfferInput[]
    deleteMany?: OfferProposalScalarWhereInput | OfferProposalScalarWhereInput[]
  }

  export type TradeOfferItemUncheckedUpdateManyWithoutTradeOfferNestedInput = {
    create?: XOR<TradeOfferItemCreateWithoutTradeOfferInput, TradeOfferItemUncheckedCreateWithoutTradeOfferInput> | TradeOfferItemCreateWithoutTradeOfferInput[] | TradeOfferItemUncheckedCreateWithoutTradeOfferInput[]
    connectOrCreate?: TradeOfferItemCreateOrConnectWithoutTradeOfferInput | TradeOfferItemCreateOrConnectWithoutTradeOfferInput[]
    upsert?: TradeOfferItemUpsertWithWhereUniqueWithoutTradeOfferInput | TradeOfferItemUpsertWithWhereUniqueWithoutTradeOfferInput[]
    createMany?: TradeOfferItemCreateManyTradeOfferInputEnvelope
    set?: TradeOfferItemWhereUniqueInput | TradeOfferItemWhereUniqueInput[]
    disconnect?: TradeOfferItemWhereUniqueInput | TradeOfferItemWhereUniqueInput[]
    delete?: TradeOfferItemWhereUniqueInput | TradeOfferItemWhereUniqueInput[]
    connect?: TradeOfferItemWhereUniqueInput | TradeOfferItemWhereUniqueInput[]
    update?: TradeOfferItemUpdateWithWhereUniqueWithoutTradeOfferInput | TradeOfferItemUpdateWithWhereUniqueWithoutTradeOfferInput[]
    updateMany?: TradeOfferItemUpdateManyWithWhereWithoutTradeOfferInput | TradeOfferItemUpdateManyWithWhereWithoutTradeOfferInput[]
    deleteMany?: TradeOfferItemScalarWhereInput | TradeOfferItemScalarWhereInput[]
  }

  export type OfferProposalUncheckedUpdateManyWithoutTradeOfferNestedInput = {
    create?: XOR<OfferProposalCreateWithoutTradeOfferInput, OfferProposalUncheckedCreateWithoutTradeOfferInput> | OfferProposalCreateWithoutTradeOfferInput[] | OfferProposalUncheckedCreateWithoutTradeOfferInput[]
    connectOrCreate?: OfferProposalCreateOrConnectWithoutTradeOfferInput | OfferProposalCreateOrConnectWithoutTradeOfferInput[]
    upsert?: OfferProposalUpsertWithWhereUniqueWithoutTradeOfferInput | OfferProposalUpsertWithWhereUniqueWithoutTradeOfferInput[]
    createMany?: OfferProposalCreateManyTradeOfferInputEnvelope
    set?: OfferProposalWhereUniqueInput | OfferProposalWhereUniqueInput[]
    disconnect?: OfferProposalWhereUniqueInput | OfferProposalWhereUniqueInput[]
    delete?: OfferProposalWhereUniqueInput | OfferProposalWhereUniqueInput[]
    connect?: OfferProposalWhereUniqueInput | OfferProposalWhereUniqueInput[]
    update?: OfferProposalUpdateWithWhereUniqueWithoutTradeOfferInput | OfferProposalUpdateWithWhereUniqueWithoutTradeOfferInput[]
    updateMany?: OfferProposalUpdateManyWithWhereWithoutTradeOfferInput | OfferProposalUpdateManyWithWhereWithoutTradeOfferInput[]
    deleteMany?: OfferProposalScalarWhereInput | OfferProposalScalarWhereInput[]
  }

  export type TradeOfferCreateNestedOneWithoutItemsInput = {
    create?: XOR<TradeOfferCreateWithoutItemsInput, TradeOfferUncheckedCreateWithoutItemsInput>
    connectOrCreate?: TradeOfferCreateOrConnectWithoutItemsInput
    connect?: TradeOfferWhereUniqueInput
  }

  export type ItemCreateNestedOneWithoutTradeOfferItemInput = {
    create?: XOR<ItemCreateWithoutTradeOfferItemInput, ItemUncheckedCreateWithoutTradeOfferItemInput>
    connectOrCreate?: ItemCreateOrConnectWithoutTradeOfferItemInput
    connect?: ItemWhereUniqueInput
  }

  export type TradeOfferUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<TradeOfferCreateWithoutItemsInput, TradeOfferUncheckedCreateWithoutItemsInput>
    connectOrCreate?: TradeOfferCreateOrConnectWithoutItemsInput
    upsert?: TradeOfferUpsertWithoutItemsInput
    connect?: TradeOfferWhereUniqueInput
    update?: XOR<XOR<TradeOfferUpdateToOneWithWhereWithoutItemsInput, TradeOfferUpdateWithoutItemsInput>, TradeOfferUncheckedUpdateWithoutItemsInput>
  }

  export type ItemUpdateOneRequiredWithoutTradeOfferItemNestedInput = {
    create?: XOR<ItemCreateWithoutTradeOfferItemInput, ItemUncheckedCreateWithoutTradeOfferItemInput>
    connectOrCreate?: ItemCreateOrConnectWithoutTradeOfferItemInput
    upsert?: ItemUpsertWithoutTradeOfferItemInput
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutTradeOfferItemInput, ItemUpdateWithoutTradeOfferItemInput>, ItemUncheckedUpdateWithoutTradeOfferItemInput>
  }

  export type TradeOfferCreateNestedOneWithoutProposalsInput = {
    create?: XOR<TradeOfferCreateWithoutProposalsInput, TradeOfferUncheckedCreateWithoutProposalsInput>
    connectOrCreate?: TradeOfferCreateOrConnectWithoutProposalsInput
    connect?: TradeOfferWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutProposalsInput = {
    create?: XOR<UserCreateWithoutProposalsInput, UserUncheckedCreateWithoutProposalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProposalsInput
    connect?: UserWhereUniqueInput
  }

  export type ProposalItemCreateNestedManyWithoutOfferProposalInput = {
    create?: XOR<ProposalItemCreateWithoutOfferProposalInput, ProposalItemUncheckedCreateWithoutOfferProposalInput> | ProposalItemCreateWithoutOfferProposalInput[] | ProposalItemUncheckedCreateWithoutOfferProposalInput[]
    connectOrCreate?: ProposalItemCreateOrConnectWithoutOfferProposalInput | ProposalItemCreateOrConnectWithoutOfferProposalInput[]
    createMany?: ProposalItemCreateManyOfferProposalInputEnvelope
    connect?: ProposalItemWhereUniqueInput | ProposalItemWhereUniqueInput[]
  }

  export type ProposalItemUncheckedCreateNestedManyWithoutOfferProposalInput = {
    create?: XOR<ProposalItemCreateWithoutOfferProposalInput, ProposalItemUncheckedCreateWithoutOfferProposalInput> | ProposalItemCreateWithoutOfferProposalInput[] | ProposalItemUncheckedCreateWithoutOfferProposalInput[]
    connectOrCreate?: ProposalItemCreateOrConnectWithoutOfferProposalInput | ProposalItemCreateOrConnectWithoutOfferProposalInput[]
    createMany?: ProposalItemCreateManyOfferProposalInputEnvelope
    connect?: ProposalItemWhereUniqueInput | ProposalItemWhereUniqueInput[]
  }

  export type TradeOfferUpdateOneRequiredWithoutProposalsNestedInput = {
    create?: XOR<TradeOfferCreateWithoutProposalsInput, TradeOfferUncheckedCreateWithoutProposalsInput>
    connectOrCreate?: TradeOfferCreateOrConnectWithoutProposalsInput
    upsert?: TradeOfferUpsertWithoutProposalsInput
    connect?: TradeOfferWhereUniqueInput
    update?: XOR<XOR<TradeOfferUpdateToOneWithWhereWithoutProposalsInput, TradeOfferUpdateWithoutProposalsInput>, TradeOfferUncheckedUpdateWithoutProposalsInput>
  }

  export type UserUpdateOneRequiredWithoutProposalsNestedInput = {
    create?: XOR<UserCreateWithoutProposalsInput, UserUncheckedCreateWithoutProposalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProposalsInput
    upsert?: UserUpsertWithoutProposalsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProposalsInput, UserUpdateWithoutProposalsInput>, UserUncheckedUpdateWithoutProposalsInput>
  }

  export type ProposalItemUpdateManyWithoutOfferProposalNestedInput = {
    create?: XOR<ProposalItemCreateWithoutOfferProposalInput, ProposalItemUncheckedCreateWithoutOfferProposalInput> | ProposalItemCreateWithoutOfferProposalInput[] | ProposalItemUncheckedCreateWithoutOfferProposalInput[]
    connectOrCreate?: ProposalItemCreateOrConnectWithoutOfferProposalInput | ProposalItemCreateOrConnectWithoutOfferProposalInput[]
    upsert?: ProposalItemUpsertWithWhereUniqueWithoutOfferProposalInput | ProposalItemUpsertWithWhereUniqueWithoutOfferProposalInput[]
    createMany?: ProposalItemCreateManyOfferProposalInputEnvelope
    set?: ProposalItemWhereUniqueInput | ProposalItemWhereUniqueInput[]
    disconnect?: ProposalItemWhereUniqueInput | ProposalItemWhereUniqueInput[]
    delete?: ProposalItemWhereUniqueInput | ProposalItemWhereUniqueInput[]
    connect?: ProposalItemWhereUniqueInput | ProposalItemWhereUniqueInput[]
    update?: ProposalItemUpdateWithWhereUniqueWithoutOfferProposalInput | ProposalItemUpdateWithWhereUniqueWithoutOfferProposalInput[]
    updateMany?: ProposalItemUpdateManyWithWhereWithoutOfferProposalInput | ProposalItemUpdateManyWithWhereWithoutOfferProposalInput[]
    deleteMany?: ProposalItemScalarWhereInput | ProposalItemScalarWhereInput[]
  }

  export type ProposalItemUncheckedUpdateManyWithoutOfferProposalNestedInput = {
    create?: XOR<ProposalItemCreateWithoutOfferProposalInput, ProposalItemUncheckedCreateWithoutOfferProposalInput> | ProposalItemCreateWithoutOfferProposalInput[] | ProposalItemUncheckedCreateWithoutOfferProposalInput[]
    connectOrCreate?: ProposalItemCreateOrConnectWithoutOfferProposalInput | ProposalItemCreateOrConnectWithoutOfferProposalInput[]
    upsert?: ProposalItemUpsertWithWhereUniqueWithoutOfferProposalInput | ProposalItemUpsertWithWhereUniqueWithoutOfferProposalInput[]
    createMany?: ProposalItemCreateManyOfferProposalInputEnvelope
    set?: ProposalItemWhereUniqueInput | ProposalItemWhereUniqueInput[]
    disconnect?: ProposalItemWhereUniqueInput | ProposalItemWhereUniqueInput[]
    delete?: ProposalItemWhereUniqueInput | ProposalItemWhereUniqueInput[]
    connect?: ProposalItemWhereUniqueInput | ProposalItemWhereUniqueInput[]
    update?: ProposalItemUpdateWithWhereUniqueWithoutOfferProposalInput | ProposalItemUpdateWithWhereUniqueWithoutOfferProposalInput[]
    updateMany?: ProposalItemUpdateManyWithWhereWithoutOfferProposalInput | ProposalItemUpdateManyWithWhereWithoutOfferProposalInput[]
    deleteMany?: ProposalItemScalarWhereInput | ProposalItemScalarWhereInput[]
  }

  export type OfferProposalCreateNestedOneWithoutItemsInput = {
    create?: XOR<OfferProposalCreateWithoutItemsInput, OfferProposalUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OfferProposalCreateOrConnectWithoutItemsInput
    connect?: OfferProposalWhereUniqueInput
  }

  export type ItemCreateNestedOneWithoutProposalItemInput = {
    create?: XOR<ItemCreateWithoutProposalItemInput, ItemUncheckedCreateWithoutProposalItemInput>
    connectOrCreate?: ItemCreateOrConnectWithoutProposalItemInput
    connect?: ItemWhereUniqueInput
  }

  export type OfferProposalUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<OfferProposalCreateWithoutItemsInput, OfferProposalUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OfferProposalCreateOrConnectWithoutItemsInput
    upsert?: OfferProposalUpsertWithoutItemsInput
    connect?: OfferProposalWhereUniqueInput
    update?: XOR<XOR<OfferProposalUpdateToOneWithWhereWithoutItemsInput, OfferProposalUpdateWithoutItemsInput>, OfferProposalUncheckedUpdateWithoutItemsInput>
  }

  export type ItemUpdateOneRequiredWithoutProposalItemNestedInput = {
    create?: XOR<ItemCreateWithoutProposalItemInput, ItemUncheckedCreateWithoutProposalItemInput>
    connectOrCreate?: ItemCreateOrConnectWithoutProposalItemInput
    upsert?: ItemUpsertWithoutProposalItemInput
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutProposalItemInput, ItemUpdateWithoutProposalItemInput>, ItemUncheckedUpdateWithoutProposalItemInput>
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

  export type ItemCreateWithoutOwnerInput = {
    id?: string
    name: string
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tradeOfferItem?: TradeOfferItemCreateNestedOneWithoutItemInput
    proposalItem?: ProposalItemCreateNestedOneWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tradeOfferItem?: TradeOfferItemUncheckedCreateNestedOneWithoutItemInput
    proposalItem?: ProposalItemUncheckedCreateNestedOneWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutOwnerInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutOwnerInput, ItemUncheckedCreateWithoutOwnerInput>
  }

  export type ItemCreateManyOwnerInputEnvelope = {
    data: ItemCreateManyOwnerInput | ItemCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type TradeOfferCreateWithoutOwnerInput = {
    id?: string
    createdAt?: Date | string
    items?: TradeOfferItemCreateNestedManyWithoutTradeOfferInput
    proposals?: OfferProposalCreateNestedManyWithoutTradeOfferInput
  }

  export type TradeOfferUncheckedCreateWithoutOwnerInput = {
    id?: string
    createdAt?: Date | string
    items?: TradeOfferItemUncheckedCreateNestedManyWithoutTradeOfferInput
    proposals?: OfferProposalUncheckedCreateNestedManyWithoutTradeOfferInput
  }

  export type TradeOfferCreateOrConnectWithoutOwnerInput = {
    where: TradeOfferWhereUniqueInput
    create: XOR<TradeOfferCreateWithoutOwnerInput, TradeOfferUncheckedCreateWithoutOwnerInput>
  }

  export type TradeOfferCreateManyOwnerInputEnvelope = {
    data: TradeOfferCreateManyOwnerInput | TradeOfferCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type OfferProposalCreateWithoutProposerInput = {
    id?: string
    status?: string
    createdAt?: Date | string
    tradeOffer: TradeOfferCreateNestedOneWithoutProposalsInput
    items?: ProposalItemCreateNestedManyWithoutOfferProposalInput
  }

  export type OfferProposalUncheckedCreateWithoutProposerInput = {
    id?: string
    tradeOfferId: string
    status?: string
    createdAt?: Date | string
    items?: ProposalItemUncheckedCreateNestedManyWithoutOfferProposalInput
  }

  export type OfferProposalCreateOrConnectWithoutProposerInput = {
    where: OfferProposalWhereUniqueInput
    create: XOR<OfferProposalCreateWithoutProposerInput, OfferProposalUncheckedCreateWithoutProposerInput>
  }

  export type OfferProposalCreateManyProposerInputEnvelope = {
    data: OfferProposalCreateManyProposerInput | OfferProposalCreateManyProposerInput[]
    skipDuplicates?: boolean
  }

  export type ItemUpsertWithWhereUniqueWithoutOwnerInput = {
    where: ItemWhereUniqueInput
    update: XOR<ItemUpdateWithoutOwnerInput, ItemUncheckedUpdateWithoutOwnerInput>
    create: XOR<ItemCreateWithoutOwnerInput, ItemUncheckedCreateWithoutOwnerInput>
  }

  export type ItemUpdateWithWhereUniqueWithoutOwnerInput = {
    where: ItemWhereUniqueInput
    data: XOR<ItemUpdateWithoutOwnerInput, ItemUncheckedUpdateWithoutOwnerInput>
  }

  export type ItemUpdateManyWithWhereWithoutOwnerInput = {
    where: ItemScalarWhereInput
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyWithoutOwnerInput>
  }

  export type ItemScalarWhereInput = {
    AND?: ItemScalarWhereInput | ItemScalarWhereInput[]
    OR?: ItemScalarWhereInput[]
    NOT?: ItemScalarWhereInput | ItemScalarWhereInput[]
    id?: StringFilter<"Item"> | string
    name?: StringFilter<"Item"> | string
    description?: StringNullableFilter<"Item"> | string | null
    imageUrl?: StringNullableFilter<"Item"> | string | null
    ownerId?: StringFilter<"Item"> | string
    createdAt?: DateTimeFilter<"Item"> | Date | string
    updatedAt?: DateTimeFilter<"Item"> | Date | string
  }

  export type TradeOfferUpsertWithWhereUniqueWithoutOwnerInput = {
    where: TradeOfferWhereUniqueInput
    update: XOR<TradeOfferUpdateWithoutOwnerInput, TradeOfferUncheckedUpdateWithoutOwnerInput>
    create: XOR<TradeOfferCreateWithoutOwnerInput, TradeOfferUncheckedCreateWithoutOwnerInput>
  }

  export type TradeOfferUpdateWithWhereUniqueWithoutOwnerInput = {
    where: TradeOfferWhereUniqueInput
    data: XOR<TradeOfferUpdateWithoutOwnerInput, TradeOfferUncheckedUpdateWithoutOwnerInput>
  }

  export type TradeOfferUpdateManyWithWhereWithoutOwnerInput = {
    where: TradeOfferScalarWhereInput
    data: XOR<TradeOfferUpdateManyMutationInput, TradeOfferUncheckedUpdateManyWithoutOwnerInput>
  }

  export type TradeOfferScalarWhereInput = {
    AND?: TradeOfferScalarWhereInput | TradeOfferScalarWhereInput[]
    OR?: TradeOfferScalarWhereInput[]
    NOT?: TradeOfferScalarWhereInput | TradeOfferScalarWhereInput[]
    id?: StringFilter<"TradeOffer"> | string
    ownerId?: StringFilter<"TradeOffer"> | string
    createdAt?: DateTimeFilter<"TradeOffer"> | Date | string
  }

  export type OfferProposalUpsertWithWhereUniqueWithoutProposerInput = {
    where: OfferProposalWhereUniqueInput
    update: XOR<OfferProposalUpdateWithoutProposerInput, OfferProposalUncheckedUpdateWithoutProposerInput>
    create: XOR<OfferProposalCreateWithoutProposerInput, OfferProposalUncheckedCreateWithoutProposerInput>
  }

  export type OfferProposalUpdateWithWhereUniqueWithoutProposerInput = {
    where: OfferProposalWhereUniqueInput
    data: XOR<OfferProposalUpdateWithoutProposerInput, OfferProposalUncheckedUpdateWithoutProposerInput>
  }

  export type OfferProposalUpdateManyWithWhereWithoutProposerInput = {
    where: OfferProposalScalarWhereInput
    data: XOR<OfferProposalUpdateManyMutationInput, OfferProposalUncheckedUpdateManyWithoutProposerInput>
  }

  export type OfferProposalScalarWhereInput = {
    AND?: OfferProposalScalarWhereInput | OfferProposalScalarWhereInput[]
    OR?: OfferProposalScalarWhereInput[]
    NOT?: OfferProposalScalarWhereInput | OfferProposalScalarWhereInput[]
    id?: StringFilter<"OfferProposal"> | string
    tradeOfferId?: StringFilter<"OfferProposal"> | string
    proposerId?: StringFilter<"OfferProposal"> | string
    status?: StringFilter<"OfferProposal"> | string
    createdAt?: DateTimeFilter<"OfferProposal"> | Date | string
  }

  export type UserCreateWithoutItemsInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    tradeOffers?: TradeOfferCreateNestedManyWithoutOwnerInput
    proposals?: OfferProposalCreateNestedManyWithoutProposerInput
  }

  export type UserUncheckedCreateWithoutItemsInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    tradeOffers?: TradeOfferUncheckedCreateNestedManyWithoutOwnerInput
    proposals?: OfferProposalUncheckedCreateNestedManyWithoutProposerInput
  }

  export type UserCreateOrConnectWithoutItemsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutItemsInput, UserUncheckedCreateWithoutItemsInput>
  }

  export type TradeOfferItemCreateWithoutItemInput = {
    id?: string
    tradeOffer: TradeOfferCreateNestedOneWithoutItemsInput
  }

  export type TradeOfferItemUncheckedCreateWithoutItemInput = {
    id?: string
    tradeOfferId: string
  }

  export type TradeOfferItemCreateOrConnectWithoutItemInput = {
    where: TradeOfferItemWhereUniqueInput
    create: XOR<TradeOfferItemCreateWithoutItemInput, TradeOfferItemUncheckedCreateWithoutItemInput>
  }

  export type ProposalItemCreateWithoutItemInput = {
    id?: string
    offerProposal: OfferProposalCreateNestedOneWithoutItemsInput
  }

  export type ProposalItemUncheckedCreateWithoutItemInput = {
    id?: string
    offerProposalId: string
  }

  export type ProposalItemCreateOrConnectWithoutItemInput = {
    where: ProposalItemWhereUniqueInput
    create: XOR<ProposalItemCreateWithoutItemInput, ProposalItemUncheckedCreateWithoutItemInput>
  }

  export type UserUpsertWithoutItemsInput = {
    update: XOR<UserUpdateWithoutItemsInput, UserUncheckedUpdateWithoutItemsInput>
    create: XOR<UserCreateWithoutItemsInput, UserUncheckedCreateWithoutItemsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutItemsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutItemsInput, UserUncheckedUpdateWithoutItemsInput>
  }

  export type UserUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tradeOffers?: TradeOfferUpdateManyWithoutOwnerNestedInput
    proposals?: OfferProposalUpdateManyWithoutProposerNestedInput
  }

  export type UserUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tradeOffers?: TradeOfferUncheckedUpdateManyWithoutOwnerNestedInput
    proposals?: OfferProposalUncheckedUpdateManyWithoutProposerNestedInput
  }

  export type TradeOfferItemUpsertWithoutItemInput = {
    update: XOR<TradeOfferItemUpdateWithoutItemInput, TradeOfferItemUncheckedUpdateWithoutItemInput>
    create: XOR<TradeOfferItemCreateWithoutItemInput, TradeOfferItemUncheckedCreateWithoutItemInput>
    where?: TradeOfferItemWhereInput
  }

  export type TradeOfferItemUpdateToOneWithWhereWithoutItemInput = {
    where?: TradeOfferItemWhereInput
    data: XOR<TradeOfferItemUpdateWithoutItemInput, TradeOfferItemUncheckedUpdateWithoutItemInput>
  }

  export type TradeOfferItemUpdateWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    tradeOffer?: TradeOfferUpdateOneRequiredWithoutItemsNestedInput
  }

  export type TradeOfferItemUncheckedUpdateWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    tradeOfferId?: StringFieldUpdateOperationsInput | string
  }

  export type ProposalItemUpsertWithoutItemInput = {
    update: XOR<ProposalItemUpdateWithoutItemInput, ProposalItemUncheckedUpdateWithoutItemInput>
    create: XOR<ProposalItemCreateWithoutItemInput, ProposalItemUncheckedCreateWithoutItemInput>
    where?: ProposalItemWhereInput
  }

  export type ProposalItemUpdateToOneWithWhereWithoutItemInput = {
    where?: ProposalItemWhereInput
    data: XOR<ProposalItemUpdateWithoutItemInput, ProposalItemUncheckedUpdateWithoutItemInput>
  }

  export type ProposalItemUpdateWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    offerProposal?: OfferProposalUpdateOneRequiredWithoutItemsNestedInput
  }

  export type ProposalItemUncheckedUpdateWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    offerProposalId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutTradeOffersInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    items?: ItemCreateNestedManyWithoutOwnerInput
    proposals?: OfferProposalCreateNestedManyWithoutProposerInput
  }

  export type UserUncheckedCreateWithoutTradeOffersInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    items?: ItemUncheckedCreateNestedManyWithoutOwnerInput
    proposals?: OfferProposalUncheckedCreateNestedManyWithoutProposerInput
  }

  export type UserCreateOrConnectWithoutTradeOffersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTradeOffersInput, UserUncheckedCreateWithoutTradeOffersInput>
  }

  export type TradeOfferItemCreateWithoutTradeOfferInput = {
    id?: string
    item: ItemCreateNestedOneWithoutTradeOfferItemInput
  }

  export type TradeOfferItemUncheckedCreateWithoutTradeOfferInput = {
    id?: string
    itemId: string
  }

  export type TradeOfferItemCreateOrConnectWithoutTradeOfferInput = {
    where: TradeOfferItemWhereUniqueInput
    create: XOR<TradeOfferItemCreateWithoutTradeOfferInput, TradeOfferItemUncheckedCreateWithoutTradeOfferInput>
  }

  export type TradeOfferItemCreateManyTradeOfferInputEnvelope = {
    data: TradeOfferItemCreateManyTradeOfferInput | TradeOfferItemCreateManyTradeOfferInput[]
    skipDuplicates?: boolean
  }

  export type OfferProposalCreateWithoutTradeOfferInput = {
    id?: string
    status?: string
    createdAt?: Date | string
    proposer: UserCreateNestedOneWithoutProposalsInput
    items?: ProposalItemCreateNestedManyWithoutOfferProposalInput
  }

  export type OfferProposalUncheckedCreateWithoutTradeOfferInput = {
    id?: string
    proposerId: string
    status?: string
    createdAt?: Date | string
    items?: ProposalItemUncheckedCreateNestedManyWithoutOfferProposalInput
  }

  export type OfferProposalCreateOrConnectWithoutTradeOfferInput = {
    where: OfferProposalWhereUniqueInput
    create: XOR<OfferProposalCreateWithoutTradeOfferInput, OfferProposalUncheckedCreateWithoutTradeOfferInput>
  }

  export type OfferProposalCreateManyTradeOfferInputEnvelope = {
    data: OfferProposalCreateManyTradeOfferInput | OfferProposalCreateManyTradeOfferInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTradeOffersInput = {
    update: XOR<UserUpdateWithoutTradeOffersInput, UserUncheckedUpdateWithoutTradeOffersInput>
    create: XOR<UserCreateWithoutTradeOffersInput, UserUncheckedCreateWithoutTradeOffersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTradeOffersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTradeOffersInput, UserUncheckedUpdateWithoutTradeOffersInput>
  }

  export type UserUpdateWithoutTradeOffersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ItemUpdateManyWithoutOwnerNestedInput
    proposals?: OfferProposalUpdateManyWithoutProposerNestedInput
  }

  export type UserUncheckedUpdateWithoutTradeOffersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ItemUncheckedUpdateManyWithoutOwnerNestedInput
    proposals?: OfferProposalUncheckedUpdateManyWithoutProposerNestedInput
  }

  export type TradeOfferItemUpsertWithWhereUniqueWithoutTradeOfferInput = {
    where: TradeOfferItemWhereUniqueInput
    update: XOR<TradeOfferItemUpdateWithoutTradeOfferInput, TradeOfferItemUncheckedUpdateWithoutTradeOfferInput>
    create: XOR<TradeOfferItemCreateWithoutTradeOfferInput, TradeOfferItemUncheckedCreateWithoutTradeOfferInput>
  }

  export type TradeOfferItemUpdateWithWhereUniqueWithoutTradeOfferInput = {
    where: TradeOfferItemWhereUniqueInput
    data: XOR<TradeOfferItemUpdateWithoutTradeOfferInput, TradeOfferItemUncheckedUpdateWithoutTradeOfferInput>
  }

  export type TradeOfferItemUpdateManyWithWhereWithoutTradeOfferInput = {
    where: TradeOfferItemScalarWhereInput
    data: XOR<TradeOfferItemUpdateManyMutationInput, TradeOfferItemUncheckedUpdateManyWithoutTradeOfferInput>
  }

  export type TradeOfferItemScalarWhereInput = {
    AND?: TradeOfferItemScalarWhereInput | TradeOfferItemScalarWhereInput[]
    OR?: TradeOfferItemScalarWhereInput[]
    NOT?: TradeOfferItemScalarWhereInput | TradeOfferItemScalarWhereInput[]
    id?: StringFilter<"TradeOfferItem"> | string
    tradeOfferId?: StringFilter<"TradeOfferItem"> | string
    itemId?: StringFilter<"TradeOfferItem"> | string
  }

  export type OfferProposalUpsertWithWhereUniqueWithoutTradeOfferInput = {
    where: OfferProposalWhereUniqueInput
    update: XOR<OfferProposalUpdateWithoutTradeOfferInput, OfferProposalUncheckedUpdateWithoutTradeOfferInput>
    create: XOR<OfferProposalCreateWithoutTradeOfferInput, OfferProposalUncheckedCreateWithoutTradeOfferInput>
  }

  export type OfferProposalUpdateWithWhereUniqueWithoutTradeOfferInput = {
    where: OfferProposalWhereUniqueInput
    data: XOR<OfferProposalUpdateWithoutTradeOfferInput, OfferProposalUncheckedUpdateWithoutTradeOfferInput>
  }

  export type OfferProposalUpdateManyWithWhereWithoutTradeOfferInput = {
    where: OfferProposalScalarWhereInput
    data: XOR<OfferProposalUpdateManyMutationInput, OfferProposalUncheckedUpdateManyWithoutTradeOfferInput>
  }

  export type TradeOfferCreateWithoutItemsInput = {
    id?: string
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutTradeOffersInput
    proposals?: OfferProposalCreateNestedManyWithoutTradeOfferInput
  }

  export type TradeOfferUncheckedCreateWithoutItemsInput = {
    id?: string
    ownerId: string
    createdAt?: Date | string
    proposals?: OfferProposalUncheckedCreateNestedManyWithoutTradeOfferInput
  }

  export type TradeOfferCreateOrConnectWithoutItemsInput = {
    where: TradeOfferWhereUniqueInput
    create: XOR<TradeOfferCreateWithoutItemsInput, TradeOfferUncheckedCreateWithoutItemsInput>
  }

  export type ItemCreateWithoutTradeOfferItemInput = {
    id?: string
    name: string
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutItemsInput
    proposalItem?: ProposalItemCreateNestedOneWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutTradeOfferItemInput = {
    id?: string
    name: string
    description?: string | null
    imageUrl?: string | null
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    proposalItem?: ProposalItemUncheckedCreateNestedOneWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutTradeOfferItemInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutTradeOfferItemInput, ItemUncheckedCreateWithoutTradeOfferItemInput>
  }

  export type TradeOfferUpsertWithoutItemsInput = {
    update: XOR<TradeOfferUpdateWithoutItemsInput, TradeOfferUncheckedUpdateWithoutItemsInput>
    create: XOR<TradeOfferCreateWithoutItemsInput, TradeOfferUncheckedCreateWithoutItemsInput>
    where?: TradeOfferWhereInput
  }

  export type TradeOfferUpdateToOneWithWhereWithoutItemsInput = {
    where?: TradeOfferWhereInput
    data: XOR<TradeOfferUpdateWithoutItemsInput, TradeOfferUncheckedUpdateWithoutItemsInput>
  }

  export type TradeOfferUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutTradeOffersNestedInput
    proposals?: OfferProposalUpdateManyWithoutTradeOfferNestedInput
  }

  export type TradeOfferUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proposals?: OfferProposalUncheckedUpdateManyWithoutTradeOfferNestedInput
  }

  export type ItemUpsertWithoutTradeOfferItemInput = {
    update: XOR<ItemUpdateWithoutTradeOfferItemInput, ItemUncheckedUpdateWithoutTradeOfferItemInput>
    create: XOR<ItemCreateWithoutTradeOfferItemInput, ItemUncheckedCreateWithoutTradeOfferItemInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutTradeOfferItemInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutTradeOfferItemInput, ItemUncheckedUpdateWithoutTradeOfferItemInput>
  }

  export type ItemUpdateWithoutTradeOfferItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutItemsNestedInput
    proposalItem?: ProposalItemUpdateOneWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutTradeOfferItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proposalItem?: ProposalItemUncheckedUpdateOneWithoutItemNestedInput
  }

  export type TradeOfferCreateWithoutProposalsInput = {
    id?: string
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutTradeOffersInput
    items?: TradeOfferItemCreateNestedManyWithoutTradeOfferInput
  }

  export type TradeOfferUncheckedCreateWithoutProposalsInput = {
    id?: string
    ownerId: string
    createdAt?: Date | string
    items?: TradeOfferItemUncheckedCreateNestedManyWithoutTradeOfferInput
  }

  export type TradeOfferCreateOrConnectWithoutProposalsInput = {
    where: TradeOfferWhereUniqueInput
    create: XOR<TradeOfferCreateWithoutProposalsInput, TradeOfferUncheckedCreateWithoutProposalsInput>
  }

  export type UserCreateWithoutProposalsInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    items?: ItemCreateNestedManyWithoutOwnerInput
    tradeOffers?: TradeOfferCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutProposalsInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    items?: ItemUncheckedCreateNestedManyWithoutOwnerInput
    tradeOffers?: TradeOfferUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutProposalsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProposalsInput, UserUncheckedCreateWithoutProposalsInput>
  }

  export type ProposalItemCreateWithoutOfferProposalInput = {
    id?: string
    item: ItemCreateNestedOneWithoutProposalItemInput
  }

  export type ProposalItemUncheckedCreateWithoutOfferProposalInput = {
    id?: string
    itemId: string
  }

  export type ProposalItemCreateOrConnectWithoutOfferProposalInput = {
    where: ProposalItemWhereUniqueInput
    create: XOR<ProposalItemCreateWithoutOfferProposalInput, ProposalItemUncheckedCreateWithoutOfferProposalInput>
  }

  export type ProposalItemCreateManyOfferProposalInputEnvelope = {
    data: ProposalItemCreateManyOfferProposalInput | ProposalItemCreateManyOfferProposalInput[]
    skipDuplicates?: boolean
  }

  export type TradeOfferUpsertWithoutProposalsInput = {
    update: XOR<TradeOfferUpdateWithoutProposalsInput, TradeOfferUncheckedUpdateWithoutProposalsInput>
    create: XOR<TradeOfferCreateWithoutProposalsInput, TradeOfferUncheckedCreateWithoutProposalsInput>
    where?: TradeOfferWhereInput
  }

  export type TradeOfferUpdateToOneWithWhereWithoutProposalsInput = {
    where?: TradeOfferWhereInput
    data: XOR<TradeOfferUpdateWithoutProposalsInput, TradeOfferUncheckedUpdateWithoutProposalsInput>
  }

  export type TradeOfferUpdateWithoutProposalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutTradeOffersNestedInput
    items?: TradeOfferItemUpdateManyWithoutTradeOfferNestedInput
  }

  export type TradeOfferUncheckedUpdateWithoutProposalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: TradeOfferItemUncheckedUpdateManyWithoutTradeOfferNestedInput
  }

  export type UserUpsertWithoutProposalsInput = {
    update: XOR<UserUpdateWithoutProposalsInput, UserUncheckedUpdateWithoutProposalsInput>
    create: XOR<UserCreateWithoutProposalsInput, UserUncheckedCreateWithoutProposalsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProposalsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProposalsInput, UserUncheckedUpdateWithoutProposalsInput>
  }

  export type UserUpdateWithoutProposalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ItemUpdateManyWithoutOwnerNestedInput
    tradeOffers?: TradeOfferUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutProposalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ItemUncheckedUpdateManyWithoutOwnerNestedInput
    tradeOffers?: TradeOfferUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type ProposalItemUpsertWithWhereUniqueWithoutOfferProposalInput = {
    where: ProposalItemWhereUniqueInput
    update: XOR<ProposalItemUpdateWithoutOfferProposalInput, ProposalItemUncheckedUpdateWithoutOfferProposalInput>
    create: XOR<ProposalItemCreateWithoutOfferProposalInput, ProposalItemUncheckedCreateWithoutOfferProposalInput>
  }

  export type ProposalItemUpdateWithWhereUniqueWithoutOfferProposalInput = {
    where: ProposalItemWhereUniqueInput
    data: XOR<ProposalItemUpdateWithoutOfferProposalInput, ProposalItemUncheckedUpdateWithoutOfferProposalInput>
  }

  export type ProposalItemUpdateManyWithWhereWithoutOfferProposalInput = {
    where: ProposalItemScalarWhereInput
    data: XOR<ProposalItemUpdateManyMutationInput, ProposalItemUncheckedUpdateManyWithoutOfferProposalInput>
  }

  export type ProposalItemScalarWhereInput = {
    AND?: ProposalItemScalarWhereInput | ProposalItemScalarWhereInput[]
    OR?: ProposalItemScalarWhereInput[]
    NOT?: ProposalItemScalarWhereInput | ProposalItemScalarWhereInput[]
    id?: StringFilter<"ProposalItem"> | string
    offerProposalId?: StringFilter<"ProposalItem"> | string
    itemId?: StringFilter<"ProposalItem"> | string
  }

  export type OfferProposalCreateWithoutItemsInput = {
    id?: string
    status?: string
    createdAt?: Date | string
    tradeOffer: TradeOfferCreateNestedOneWithoutProposalsInput
    proposer: UserCreateNestedOneWithoutProposalsInput
  }

  export type OfferProposalUncheckedCreateWithoutItemsInput = {
    id?: string
    tradeOfferId: string
    proposerId: string
    status?: string
    createdAt?: Date | string
  }

  export type OfferProposalCreateOrConnectWithoutItemsInput = {
    where: OfferProposalWhereUniqueInput
    create: XOR<OfferProposalCreateWithoutItemsInput, OfferProposalUncheckedCreateWithoutItemsInput>
  }

  export type ItemCreateWithoutProposalItemInput = {
    id?: string
    name: string
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutItemsInput
    tradeOfferItem?: TradeOfferItemCreateNestedOneWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutProposalItemInput = {
    id?: string
    name: string
    description?: string | null
    imageUrl?: string | null
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tradeOfferItem?: TradeOfferItemUncheckedCreateNestedOneWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutProposalItemInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutProposalItemInput, ItemUncheckedCreateWithoutProposalItemInput>
  }

  export type OfferProposalUpsertWithoutItemsInput = {
    update: XOR<OfferProposalUpdateWithoutItemsInput, OfferProposalUncheckedUpdateWithoutItemsInput>
    create: XOR<OfferProposalCreateWithoutItemsInput, OfferProposalUncheckedCreateWithoutItemsInput>
    where?: OfferProposalWhereInput
  }

  export type OfferProposalUpdateToOneWithWhereWithoutItemsInput = {
    where?: OfferProposalWhereInput
    data: XOR<OfferProposalUpdateWithoutItemsInput, OfferProposalUncheckedUpdateWithoutItemsInput>
  }

  export type OfferProposalUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tradeOffer?: TradeOfferUpdateOneRequiredWithoutProposalsNestedInput
    proposer?: UserUpdateOneRequiredWithoutProposalsNestedInput
  }

  export type OfferProposalUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tradeOfferId?: StringFieldUpdateOperationsInput | string
    proposerId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUpsertWithoutProposalItemInput = {
    update: XOR<ItemUpdateWithoutProposalItemInput, ItemUncheckedUpdateWithoutProposalItemInput>
    create: XOR<ItemCreateWithoutProposalItemInput, ItemUncheckedCreateWithoutProposalItemInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutProposalItemInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutProposalItemInput, ItemUncheckedUpdateWithoutProposalItemInput>
  }

  export type ItemUpdateWithoutProposalItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutItemsNestedInput
    tradeOfferItem?: TradeOfferItemUpdateOneWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutProposalItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tradeOfferItem?: TradeOfferItemUncheckedUpdateOneWithoutItemNestedInput
  }

  export type ItemCreateManyOwnerInput = {
    id?: string
    name: string
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TradeOfferCreateManyOwnerInput = {
    id?: string
    createdAt?: Date | string
  }

  export type OfferProposalCreateManyProposerInput = {
    id?: string
    tradeOfferId: string
    status?: string
    createdAt?: Date | string
  }

  export type ItemUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tradeOfferItem?: TradeOfferItemUpdateOneWithoutItemNestedInput
    proposalItem?: ProposalItemUpdateOneWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tradeOfferItem?: TradeOfferItemUncheckedUpdateOneWithoutItemNestedInput
    proposalItem?: ProposalItemUncheckedUpdateOneWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradeOfferUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: TradeOfferItemUpdateManyWithoutTradeOfferNestedInput
    proposals?: OfferProposalUpdateManyWithoutTradeOfferNestedInput
  }

  export type TradeOfferUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: TradeOfferItemUncheckedUpdateManyWithoutTradeOfferNestedInput
    proposals?: OfferProposalUncheckedUpdateManyWithoutTradeOfferNestedInput
  }

  export type TradeOfferUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfferProposalUpdateWithoutProposerInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tradeOffer?: TradeOfferUpdateOneRequiredWithoutProposalsNestedInput
    items?: ProposalItemUpdateManyWithoutOfferProposalNestedInput
  }

  export type OfferProposalUncheckedUpdateWithoutProposerInput = {
    id?: StringFieldUpdateOperationsInput | string
    tradeOfferId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ProposalItemUncheckedUpdateManyWithoutOfferProposalNestedInput
  }

  export type OfferProposalUncheckedUpdateManyWithoutProposerInput = {
    id?: StringFieldUpdateOperationsInput | string
    tradeOfferId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradeOfferItemCreateManyTradeOfferInput = {
    id?: string
    itemId: string
  }

  export type OfferProposalCreateManyTradeOfferInput = {
    id?: string
    proposerId: string
    status?: string
    createdAt?: Date | string
  }

  export type TradeOfferItemUpdateWithoutTradeOfferInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: ItemUpdateOneRequiredWithoutTradeOfferItemNestedInput
  }

  export type TradeOfferItemUncheckedUpdateWithoutTradeOfferInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
  }

  export type TradeOfferItemUncheckedUpdateManyWithoutTradeOfferInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
  }

  export type OfferProposalUpdateWithoutTradeOfferInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proposer?: UserUpdateOneRequiredWithoutProposalsNestedInput
    items?: ProposalItemUpdateManyWithoutOfferProposalNestedInput
  }

  export type OfferProposalUncheckedUpdateWithoutTradeOfferInput = {
    id?: StringFieldUpdateOperationsInput | string
    proposerId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ProposalItemUncheckedUpdateManyWithoutOfferProposalNestedInput
  }

  export type OfferProposalUncheckedUpdateManyWithoutTradeOfferInput = {
    id?: StringFieldUpdateOperationsInput | string
    proposerId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProposalItemCreateManyOfferProposalInput = {
    id?: string
    itemId: string
  }

  export type ProposalItemUpdateWithoutOfferProposalInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: ItemUpdateOneRequiredWithoutProposalItemNestedInput
  }

  export type ProposalItemUncheckedUpdateWithoutOfferProposalInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
  }

  export type ProposalItemUncheckedUpdateManyWithoutOfferProposalInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
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