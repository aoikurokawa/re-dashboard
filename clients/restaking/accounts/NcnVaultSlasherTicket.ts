/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from "@solana/web3.js";
import * as beet from "@metaplex-foundation/beet";
import * as beetSolana from "@metaplex-foundation/beet-solana";
import { SlotToggle, slotToggleBeet } from "../types/SlotToggle";

/**
 * Arguments used to create {@link NcnVaultSlasherTicket}
 * @category Accounts
 * @category generated
 */
export type NcnVaultSlasherTicketArgs = {
  ncn: web3.PublicKey;
  vault: web3.PublicKey;
  slasher: web3.PublicKey;
  maxSlashablePerEpoch: beet.bignum;
  index: beet.bignum;
  state: SlotToggle;
  bump: number;
  reserved: number[] /* size: 263 */;
};
/**
 * Holds the data for the {@link NcnVaultSlasherTicket} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class NcnVaultSlasherTicket implements NcnVaultSlasherTicketArgs {
  private constructor(
    readonly ncn: web3.PublicKey,
    readonly vault: web3.PublicKey,
    readonly slasher: web3.PublicKey,
    readonly maxSlashablePerEpoch: beet.bignum,
    readonly index: beet.bignum,
    readonly state: SlotToggle,
    readonly bump: number,
    readonly reserved: number[] /* size: 263 */,
  ) {}

  /**
   * Creates a {@link NcnVaultSlasherTicket} instance from the provided args.
   */
  static fromArgs(args: NcnVaultSlasherTicketArgs) {
    return new NcnVaultSlasherTicket(
      args.ncn,
      args.vault,
      args.slasher,
      args.maxSlashablePerEpoch,
      args.index,
      args.state,
      args.bump,
      args.reserved,
    );
  }

  /**
   * Deserializes the {@link NcnVaultSlasherTicket} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0,
  ): [NcnVaultSlasherTicket, number] {
    return NcnVaultSlasherTicket.deserialize(accountInfo.data, offset);
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link NcnVaultSlasherTicket} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
    commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig,
  ): Promise<NcnVaultSlasherTicket> {
    const accountInfo = await connection.getAccountInfo(
      address,
      commitmentOrConfig,
    );
    if (accountInfo == null) {
      throw new Error(
        `Unable to find NcnVaultSlasherTicket account at ${address}`,
      );
    }
    return NcnVaultSlasherTicket.fromAccountInfo(accountInfo, 0)[0];
  }

  /**
   * Provides a {@link web3.Connection.getProgramAccounts} config builder,
   * to fetch accounts matching filters that can be specified via that builder.
   *
   * @param programId - the program that owns the accounts we are filtering
   */
  static gpaBuilder(
    programId: web3.PublicKey = new web3.PublicKey(
      "RestkWeAVL8fRGgzhfeoqFhsqKRchg6aa1XrcH96z4Q",
    ),
  ) {
    return beetSolana.GpaBuilder.fromStruct(
      programId,
      ncnVaultSlasherTicketBeet,
    );
  }

  /**
   * Deserializes the {@link NcnVaultSlasherTicket} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [NcnVaultSlasherTicket, number] {
    return ncnVaultSlasherTicketBeet.deserialize(buf, offset);
  }

  /**
   * Serializes the {@link NcnVaultSlasherTicket} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return ncnVaultSlasherTicketBeet.serialize(this);
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link NcnVaultSlasherTicket}
   */
  static get byteSize() {
    return ncnVaultSlasherTicketBeet.byteSize;
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link NcnVaultSlasherTicket} data from rent
   *
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    connection: web3.Connection,
    commitment?: web3.Commitment,
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(
      NcnVaultSlasherTicket.byteSize,
      commitment,
    );
  }

  /**
   * Determines if the provided {@link Buffer} has the correct byte size to
   * hold {@link NcnVaultSlasherTicket} data.
   */
  static hasCorrectByteSize(buf: Buffer, offset = 0) {
    return buf.byteLength - offset === NcnVaultSlasherTicket.byteSize;
  }

  /**
   * Returns a readable version of {@link NcnVaultSlasherTicket} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      ncn: this.ncn.toBase58(),
      vault: this.vault.toBase58(),
      slasher: this.slasher.toBase58(),
      maxSlashablePerEpoch: (() => {
        const x = <{ toNumber: () => number }>this.maxSlashablePerEpoch;
        if (typeof x.toNumber === "function") {
          try {
            return x.toNumber();
          } catch (_) {
            return x;
          }
        }
        return x;
      })(),
      index: (() => {
        const x = <{ toNumber: () => number }>this.index;
        if (typeof x.toNumber === "function") {
          try {
            return x.toNumber();
          } catch (_) {
            return x;
          }
        }
        return x;
      })(),
      state: this.state,
      bump: this.bump,
      reserved: this.reserved,
    };
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const ncnVaultSlasherTicketBeet = new beet.BeetStruct<
  NcnVaultSlasherTicket,
  NcnVaultSlasherTicketArgs
>(
  [
    ["ncn", beetSolana.publicKey],
    ["vault", beetSolana.publicKey],
    ["slasher", beetSolana.publicKey],
    ["maxSlashablePerEpoch", beet.u64],
    ["index", beet.u64],
    ["state", slotToggleBeet],
    ["bump", beet.u8],
    ["reserved", beet.uniformFixedSizeArray(beet.u8, 263)],
  ],
  NcnVaultSlasherTicket.fromArgs,
  "NcnVaultSlasherTicket",
);
