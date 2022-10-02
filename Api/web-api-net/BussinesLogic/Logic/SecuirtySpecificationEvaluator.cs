using Core.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace BussinesLogic.Logic
{
    public class SecuirtySpecificationEvaluator<T> where T: IdentityUser
    {
        public static IQueryable<T> GetQuery(IQueryable<T> inputQuery, ISpecification<T> spec)
        {
            if (spec.Criteria != null)
                inputQuery = inputQuery.Where(spec.Criteria);

            if (spec.OrderBy != null)
                inputQuery.OrderBy(spec.OrderBy); 

            if (spec.OrderByDesc != null)
                inputQuery.OrderBy(spec.OrderByDesc);

            if (spec.isPagingEnabled)
                inputQuery = inputQuery.Skip(spec.Skip).Take(spec.Take);

            inputQuery = spec.Includes.Aggregate(inputQuery, (current, include) => current.Include(include));

            return inputQuery;
        }
    }
}
