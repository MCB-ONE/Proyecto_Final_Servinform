using Core.Entities;
using Core.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace BussinesLogic.Logic
{
    public class SpecificationEvaluator<T> where T : BaseEntity
    {
        // Método encargado de agregar las relaciones necesarias y los filtros (condiciones lógicas) en cada consulta
        public static IQueryable<T> GetQuery(IQueryable<T> inputQuery, ISpecification<T> spec)
        {
            if (spec.Criteria != null)
                inputQuery = inputQuery.Where(spec.Criteria);

            if(spec.OrderBy != null)
                inputQuery.OrderBy(spec.OrderBy);

            if(spec.OrderByDescending != null)
                inputQuery.OrderBy(spec.OrderByDescending);

            if(spec.isPagingEnabled)
                inputQuery = inputQuery.Skip(spec.Skip).Take(spec.Take);

            inputQuery = spec.Includes.Aggregate(inputQuery, (current, include) => current.Include(include));

            return inputQuery;
        }
    }
}
