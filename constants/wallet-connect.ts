import { CoreTypes, ProposalTypes } from '@walletconnect/types';

import { CHAIN_ID } from './env';

export enum ChiaMethod {
	LogIn = 'chia_logIn',
	GetWallets = 'chia_getWallets',
	GetTransaction = 'chia_getTransaction',
	GetWalletBalance = 'chia_getWalletBalance',
	GetCurrentAddress = 'chia_getCurrentAddress',
	SendTransaction = 'chia_sendTransaction',
	SignMessageById = 'chia_signMessageById',
	SignMessageByAddress = 'chia_signMessageByAddress',
	VerifySignature = 'chia_verifySignature',
	GetNextAddress = 'chia_getNextAddress',
	GetSyncStatus = 'chia_getSyncStatus',
	GetAllOffers = 'chia_getAllOffers',
	GetOffersCount = 'chia_getOffersCount',
	CreateOfferForIds = 'chia_createOfferForIds',
	CancelOffer = 'chia_cancelOffer',
	CheckOfferValidity = 'chia_checkOfferValidity',
	TakeOffer = 'chia_takeOffer',
	GetOfferSummary = 'chia_getOfferSummary',
	GetOfferData = 'chia_getOfferData',
	GetOfferRecord = 'chia_getOfferRecord',
	GetCatWalletInfo = 'chia_getCATWalletInfo',
	GetCatAssetId = 'chia_getCATAssetId',
	SpendCat = 'chia_spendCAT',
	AddCatToken = 'chia_addCATToken',
	GetNfts = 'chia_getNFTs',
	GetNftInfo = 'chia_getNFTInfo',
	MintNft = 'chia_mintNFT',
	TransferNft = 'chia_transferNFT',
	GetNftsCount = 'chia_getNFTsCount',
	CreateNewDIDWallet = 'chia_createNewDIDWallet',
	// DIDCreateAttest = 'chia_createAttest',
	// DIDCreateBackupFile = 'chia_createBackupFile',
	FindLostDID = 'chia_findLostDID',
	GetDIDCurrentCoinInfo = 'chia_getDIDCurrentCoinInfo',
	GetDID = 'chia_getDID',
	GetDIDInfo = 'chia_getDIDInfo',
	GetDIDInformationNeededForRecovery = 'chia_getDIDInformationNeededForRecovery',
	GetDIDMetadata = 'chia_getDIDMetadata',
	GetDIDPubkey = 'chia_getDIDPubkey',
	GetDIDRecoveryList = 'chia_getDIDRecoveryList',
	GetDIDName = 'chia_getDIDName',
	// MessageSpend = 'chia_messageSpend',
	// RecoverySpend = 'chia_recoverySpend',
	TransferDID = 'chia_transferDID',
	UpdateDIDMetadata = 'chia_updateDIDMetadata',
	UpdateDIDRecoveryIds = 'chia_updateDIDRecoveryIds',
	SetDIDName = 'chia_setDIDName',
	SetNftDID = 'chia_setNFTDID',
	GetNftWalletsWithDIDs = 'chia_getNFTWalletsWithDIDs',
}

export const REQUIRED_NAMESPACES: ProposalTypes.RequiredNamespaces = {
	chia: {
		methods: Object.values(ChiaMethod),
		chains: [CHAIN_ID],
		events: [],
	},
};

export const METADATA: CoreTypes.Metadata = {
	name: 'Gosti Marketplace Dapp',
	description: 'Connection to Gosti Marketplace',
	url: '#',
	icons: [
		'https://raw.githubusercontent.com/Open-Market-Dev-Club/gosti-client-gui/f0a129cb060853fffa8f70be2be1e2724c3fff4c/public/icon.png',
	],
};
