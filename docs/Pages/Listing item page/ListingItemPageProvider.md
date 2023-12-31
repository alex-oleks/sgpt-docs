The `ListingItemPageProvider` component serves as a data provider for the `ListingItemPage` component, which displays
detailed information about a real estate listing. This provider component manages data fetching, state management, and
user interactions related to the listing details.

### Hooks

"Certainly, here are code examples from your component that demonstrate the usage of each:

### 1. `useFavoriteListings` Custom Hook:

```javascript static
const { favoriteListingsIds } = useFavoriteListings({ UID });
```

In this line, you're using `useFavoriteListings` to retrieve the user's favorite listings' IDs. `favoriteListingsIds`
will contain an array of these IDs.

### 2. `useQuery` (React Query):

```javascript static
const { isLoading: listingsIsLoading, data: allListings } = useQuery({
  queryKey: ['getListingsRooms', { filterOptions: null, regions: null, showOnlyAgentsListings: false }],
  // ...
});
```

Here, you're using `useQuery` to fetch all listings. `isLoading` indicates whether the data is still loading, and `data`
will contain the fetched listings once they're available.

### 3. `useScreenSize` Custom Hook:

```javascript static
const screenSize = useScreenSize();
const isMobile = screenSize === 'xs' || screenSize === 's';
```

This code snippet uses `useScreenSize` to determine the screen size. It then sets `isMobile` to `true` if the screen
size is extra-small or small.

### 4. `useEffect`:

```javascript static
useEffect(() => {
  if (id) {
    const currentActiveListing = allListings?.find((listing) => listing.Id === id);
    // ...
    setActiveListing(activeListingsWithFilteredMedia);
  }
}, [id, allListings, favoriteListingsIds]);
```

### 5. `useGetAllListings` Custom Hook:
Get all listings and handle loading

```javascript static
const { listingsIsLoading, allListings } = useGetAllListings();
```

### 6. `useHandleDetailedListingItem` Custom Hook:
Get detailed listing property and merge with other data about this property. 

```javascript static
useHandleDetailedListingItem({ listingId: id, allListings, favoriteListingsIds, setActiveListing });
```

### Data Flow

The `ListingItemPageProvider` component orchestrates the data flow and interactions as follows:

1. **Initialization (`UID`):** It retrieves the current user's UID from Firebase authentication, which is used for
   fetching and updating user-specific data.

2. **Screen Size (`screenSize`):** It uses the `useScreenSize` hook to determine the screen size, which influences the
   component's responsiveness. The component adapts its behavior for mobile screens.

3. **URL Parameters (`id`):** It extracts the `id` parameter from the URL using the `useParams` hook. This parameter
   corresponds to the specific listing's unique identifier.

4. **Favorite Listings (`useFavoriteListings`):** It utilizes the `useFavoriteListings` hook to fetch the user's
   favorite listings' IDs based on their UID. This data is used to determine whether a listing is liked by the user.

5. **All Listings (`useQuery`):** It employs the `useQuery` hook from `react-query` to fetch all available listings or
   rooms. This query retrieves a list of listings with filter options specified by `getFilterOptionsBody`. It also
   handles potential errors, displaying a toast notification if the data retrieval fails.

6. **Toggle Like Listing (`handleToggleLikeListingItem`):** This callback function is used to toggle the liked status of
   a listing. It interacts with the `ProfileAPI` service to update the user's liked listings.

7. **Active Listing (`activeListing`):** An effect (`useEffect`) is used to manage the active listing based on the `id`
   parameter. It checks if the `id` matches a valid listing and updates the `activeListing` state accordingly. If the
   listing has multiple media items, it filters and displays up to five media items.

8. **Document Title (`useDocumentTitle`):** The component uses the `useDocumentTitle` hook to set the document title
   dynamically based on the `activeListing`, displaying the listing's address.

9. **Rendering (`ListingItemPage`):** Finally, the `ListingItemPageProvider` component renders the `ListingItemPage`
   component, passing it the necessary props,
   including `listingsIsLoading`, `handleToggleLikeListingItem`, `activeListing`, and `isMobile`.

### Component Structure

The `ListingItemPageProvider` component renders any `children` element and serves as a data orchestrator and
state manager for the `ListingItemPage` component.

### Usage

To use the `ListingItemPageProvider` component, follow these steps:

1. Import the `ListingItemPageProvider` component into your application.

   ```javascript static
   import ListingItemPageProvider from './ListingItemPageProvider';
   ```

2. Include the `ListingItemPageProvider` component within your application's routing system or wherever you want to
   display the detailed information of a real estate listing.

   ```javascript static
   <ListingItemPageProvider />
   ```

3. Ensure that the `ListingItemPage` component is appropriately styled and structured to display listing details.
