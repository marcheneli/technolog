﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Technolog.SL.DTO;

namespace Technolog.SL.Interfaces
{
    public interface ITechOperationService : IService<TechOperationDTO>
    {
        TechOperationListDTO GetPage(int page, int pageSize, string search);
        Task<TechOperationListDTO> GetPageAsync(int page, int pageSize, string search);
    }
}
