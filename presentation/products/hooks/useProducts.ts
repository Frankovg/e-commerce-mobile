import { getProducts } from "@/core/products/actions/get-products.actions"
import { useInfiniteQuery } from "@tanstack/react-query"

export const useProducts = () => {

  const productsQuery = useInfiniteQuery({
    queryKey: ['products', 'infinite'],
    queryFn: async ({ pageParam = 0 }) => {
      return getProducts(20, pageParam * 20)
    },

    staleTime: 1000 * 60 * 60,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => allPages.length,
  })

  return {
    productsQuery,
    loadNextPage: productsQuery.fetchNextPage,
  }
}
