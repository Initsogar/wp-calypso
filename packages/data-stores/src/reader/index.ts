import { useSubscriberEmailAddress } from './hooks';
import {
	usePostUnfollowMutation,
	useSiteDeliveryFrequencyMutation,
	useSiteUnfollowMutation,
	useUserSettingsMutation,
	usePendingSiteConfirmMutation,
	usePendingSiteDeleteMutation,
	usePendingPostConfirmMutation,
	usePendingPostDeleteMutation,
} from './mutations';
import {
	SiteSubscriptionsSortBy,
	useSiteSubscriptionsQuery,
	usePostSubscriptionsQuery,
	useSubscriptionsCountQuery,
	useUserSettingsQuery,
	usePendingSiteSubscriptionsQuery,
	usePendingPostSubscriptionsQuery,
} from './queries';

export const SubscriptionManager = {
	SiteSubscriptionsSortBy,
	usePostUnfollowMutation,
	useSiteDeliveryFrequencyMutation,
	useSiteSubscriptionsQuery,
	usePostSubscriptionsQuery,
	useSiteUnfollowMutation,
	useSubscriptionsCountQuery,
	useSubscriberEmailAddress,
	useUserSettingsQuery,
	useUserSettingsMutation,
	usePendingSiteSubscriptionsQuery,
	usePendingPostSubscriptionsQuery,
	usePendingSiteConfirmMutation,
	usePendingSiteDeleteMutation,
	usePendingPostConfirmMutation,
	usePendingPostDeleteMutation,
};

// Types
export type {
	DeliveryWindowDayType,
	DeliveryWindowHourType,
	EmailFormatType,
	SubscriptionManagerUserSettings,
} from './types';
